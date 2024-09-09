import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

function App() {
  const [outputImage, setOutputImage] = useState(null);

  const handleFileUpload = async (file, format) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('format', format);

    const response = await fetch('all-conver-backend.vercel.app/convert', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const blob = await response.blob();
      setOutputImage(URL.createObjectURL(blob));
    } else {
      console.error('Conversion failed');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <FileUpload onFileUpload={handleFileUpload} />
        </div>
        <div className="right">
          {outputImage && <img src={outputImage} alt="Converted" />}
        </div>
      </div>
    </div>
  );
}

export default App;
