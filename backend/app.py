from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import docx
import pdfplumber
import requests

# Load .env file
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

app = Flask(__name__)
UPLOAD_FOLDER = 'upload'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Text extraction function
def extract_text(file_path, ext):
    text = ""
    if ext == ".txt":
        with open(file_path, "r", encoding="utf-8") as f:
            text = f.read()
    elif ext == ".docx":
        doc = docx.Document(file_path)
        text = "\n".join([para.text for para in doc.paragraphs])
    elif ext == ".pdf":
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ''
    return text

# Main route to handle file upload
@app.route('/upload', methods=['POST'])
def upload():
    file = request.files.get('file')
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    filename = file.filename
    ext = os.path.splitext(filename)[1].lower()
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    # Extract text from the file
    text = extract_text(filepath, ext)
    if not text.strip():
        return jsonify({"error": "No readable text found in document."}), 400

    # Call Groq API to analyze
    groq_result = call_groq(text)

    return jsonify(groq_result)

# Groq API call
def call_groq(text):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    prompt = f"""
You are a legal assistant AI.

Analyze the following legal document and return:
1. A plain-language summary
2. A list of potential risks or missing clauses
3. Suggestions to improve clarity or compliance

Respond ONLY in JSON like:
{{
  "summary": "...",
  "risks": ["..."],
  "suggestions": ["..."]
}}

Document:
{text}
"""

    payload = {
        "model": "llama3-70b-8192",
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.3
    }

    response = requests.post(url, headers=headers, json=payload)
    try:
        content = response.json()['choices'][0]['message']['content']
        # Try parsing as dict-like JSON from model
        return eval(content) if content.startswith("{") else {
            "summary": content, "risks": [], "suggestions": []
        }
    except Exception as e:
        return {
            "summary": "Failed to parse response.",
            "risks": [],
            "suggestions": [],
            "error": str(e)
        }

# Run the app
if __name__ == '__main__':
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    app.run(debug=True, port=5173)
