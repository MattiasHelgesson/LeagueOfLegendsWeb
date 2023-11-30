import React from 'react';
import './News.css';

function News(props) {
  return (
    <div className="News">
      <div className="column">
        <img src="image1.jpg" alt="Image 1" />
        <p>Text for column 1</p>
      </div>
      <div className="column">
        <img src="image2.jpg" alt="Image 2" />
        <p>Text for column 2</p>
      </div>
      <div className="column">
        <img src="image3.jpg" alt="Image 3" />
        <p>Text for column 3</p>
      </div>
      <div className="column larger-column">
        <img src="image4.jpg" alt="Image 4" />
        <p>Text for larger column 4</p>
      </div>
    </div>
  );
}

export default News;
