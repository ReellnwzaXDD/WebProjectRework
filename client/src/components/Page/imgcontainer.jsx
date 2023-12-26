import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/img/normal?page=${currentPage}&sortType=${sortType}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const sanitizedImagePaths = data.imagePaths.map(path => path.replace(/\.\.\//g, ''));
        setImagePaths(sanitizedImagePaths);
      } catch (error) {
        console.error('Error fetching image paths:', error);
        // You might want to set an error state or display an error message to the user
      }
    };
  
    fetchData();
  }, [currentPage, sortType]);
  

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleSortSubmit = (type) => {
    // Update the sorting type state
    setSortType(type);
  };

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort by Feature
        </div>
        <div className="dropdown-content" style={{ left: '1px' }}>
          <button
            className="SortBT"
            onClick={() => handleSortSubmit('DESC')}
          >
            Sort by MAX
          </button>
          <button
            className="SortBT"
            onClick={() => handleSortSubmit('ASC')}
          >
            Sort by MIN
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagePaths.map((imagePath, index) => (
          <div key={index} className="product-item border border-gray-300 p-4">
            <a href={`ShopDetail?imgpath=${imagePath}`}>
              <img src={imagePath} alt="Image" className="w-full" />
            </a>
            {/* You can add additional details here based on your API response */}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevPage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Previous Page
        </button>
        <button onClick={handleNextPage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
