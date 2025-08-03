import React, { useState } from 'react';
import Doc from './components/doc';
import Result from './components/Result';

function App() {
  const [resultData, setResultData] = useState(null);

  const handleFileUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('http://localhost:5173/upload', {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header - FormData handles it automatically
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Upload failed');
    }

    const data = await response.json();
    setResultData(data);
    } catch (error) {
      console.error('Upload failed:', error.message);
      throw error; // Propagate to Doc.jsx
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-4">
      <h1 className="text-3xl text-black md:text-4xl lg:text-5xl font-medium my-8">
        Legal Document Analyser
      </h1>
      <Doc onUpload={handleFileUpload} />
      {resultData && <Result data={resultData} />}
    </div>
  );
}

export default App;
