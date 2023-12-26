import React, { useEffect, useState } from 'react';

const ImageContainer = ({ imagePaths }) => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        imagePaths.map(async (imagePath) => {
          const response = await fetch(`/getPriceAndPid?imagePath=${imagePath}`);
          return response.json();
        })
      );

      setImageData(data);
    };

    fetchData();
  }, [imagePaths]);

  const renderedImages = imageData.map(({ price, pid }, index) => (
    <div key={index} className="product-item">
      <a href={`ShopDetail?imgpath=${imagePaths[index]}`}>
        <img src={imagePaths[index]} alt="Image" />
      </a>
      <p className="product-price">{price} ฿</p>
    </div>
  ));

  return <div id="image-container">{renderedImages}</div>;
};

export default ImageContainer;
