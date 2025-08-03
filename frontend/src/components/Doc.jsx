import React, { useState } from 'react';
import DocImg from '../assets/doc.png';

const Doc = ({ onUpload }) => {
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = async (e) => {
  const file = e.target.files[0];
  if (file) {
    setFileName(file.name);
    setStatus('Uploading...');
    try {
      await onUpload(file);
      setStatus('Uploaded ✅');
    } catch (error) {
      setStatus('Upload failed ❌');
      console.error('Upload error:', error);
    }
  } else {
    setFileName('');
    setStatus('');
  }
  };

  return (
    <div className="border-2 bg-dull-white border-grey rounded-xl border-dashed w-4/5 md:w-3/5 min-h-40 p-4 flex flex-col items-center">
      <img src={DocImg} alt="Upload" className="h-8 md:h-14 my-4" />

      <label htmlFor="myfile" className="py-2 px-4 block font-medium">
        Upload a legal document:
      </label>

      <input
        id="myfile"
        type="file"
        accept=".txt,.docx,.pdf"
        className="py-4 my-2 px-8 w-full md:w-60 md:py-2 md:px-4 rounded-lg flex justify-center border-solid border-2 border-grey"
        onChange={handleChange}
      />

      {fileName && (
        <p className="text-sm text-gray-700 mt-2">📄 {fileName}</p>
      )}

      {status && (
        <p className="text-sm font-medium mt-1 text-green-700">{status}</p>
      )}
    </div>
  );
};

export default Doc;
