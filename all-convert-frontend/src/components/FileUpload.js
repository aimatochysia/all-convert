import React, { useState } from 'react';

const formats = [
  '3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 
  'GIF', 'HEIC', 'HEIF', 'ICNS', 'ICO', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 
  'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 
  'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS', 'SVG'
];

function FileUpload({ onFileUpload }) {
  const [file, setFile] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('JPEG');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      onFileUpload(file, selectedFormat);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div className="format-list">
        {formats.map((format) => (
          <label key={format}>
            <input
              type="radio"
              name="format"
              value={format}
              checked={selectedFormat === format}
              onChange={() => setSelectedFormat(format)}
            />
            {format} Converter
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Convert</button>
    </div>
  );
}

export default FileUpload;
