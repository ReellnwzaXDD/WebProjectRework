import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3001/img/normal?page=${currentPage}`)
      .then(response => {
        if (!response.ok) {
          console.error('Response not okay:', response);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const sanitizedImagePaths = data.imagePaths.map(path => path.replace(/\.\.\//g, ''));
        setImagePaths(sanitizedImagePaths);
      })
      .catch(error => console.error('Error fetching image paths:', error));
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>
      <div id="image-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {imagePaths.map((imagePath, index) => (
          <div key={index} className="product-item" style={{ textAlign: 'center' }}>
            <a href={`ShopDetail?imgpath=${imagePath}`}>
              <img src={imagePath} alt="Image" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </a>
           
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default ImageGallery;
