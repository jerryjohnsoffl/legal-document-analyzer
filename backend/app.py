from flask import Flask, request, render_template, jsonify
import os
import pdfplumber
import docx
import requests

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def extract_text(file_path, file_type):
    text = ""
    if file_type == ".txt":
        with open(file_path, "r", encoding="utf-8") as f:
            text = f.read()
    elif file_type == ".docx":
        doc = docx.Document(file_path)
        text = "\n".join([para.text for para in doc.paragraphs])
    elif file_type == ".pdf":
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ''
    return text

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    filename = file.filename
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    ext = os.path.splitext(filename)[1]
    text = extract_text(filepath, ext)

    # --- Call Groq or any AI API ---
    response = requests.post(
        "https://api.groq.com/your-endpoint",
        headers={"Authorization": "Bearer YOUR_API_KEY"},
        json={"prompt": f"Analyze this legal document:\n\n{text}"}
    )
    ai_result = response.json()

    return jsonify({
        "summary": ai_result.get("summary", "No summary found"),
        "risks": ai_result.get("risks", []),
        "suggestions": ai_result.get("suggestions", [])
    })

if __name__ == '__main__':
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    app.run(debug=True)
