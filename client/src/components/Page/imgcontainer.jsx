import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/img/normal?page=${currentPage}&sortType=${sortType}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const sanitizedImagePaths = data.imagePaths.map((entry) => ({
          id: entry.PID, //  unique identifier
          imagePath: entry.image_path.replace(/\.\.\//g, ''),
          price: entry.price,
        }));
        
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

  const addToCart = (result) => {
    // Check if the item is already in the cart
    const isItemInCart = cart.some((item) => item.id === result.id);

    if (isItemInCart) {
      // If the item is already in the cart, you might want to update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === result.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...result, quantity: 1 }]);
    }
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
        {imagePaths.map((result, index) => (
          <div key={index} className="product-item border border-gray-300 p-4">
            
            <img src={result.imagePath} alt="Image" className="w-full" onClick={() => addToCart(result)}
            style={{ cursor: 'pointer' }}/>
           
            <p className="text-center mt-2">{result.price}฿</p>
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
