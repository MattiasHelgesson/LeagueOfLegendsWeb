import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Champions.css';

function Champions(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2999/api/champion')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Champions Page</h1>
      <div className="champion-container">
        {data.map((item) => (
          <div key={item._id} className="champion-box">
            {item.picture != null ? <img src={`http://localhost:2999/api/file/${item.picture}`} alt={item.name} /> : <></>}
            <p>{item.name}</p>
            <p>{item.description}</p> {/* Here, assuming 'description' is the field that holds the character description */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Champions;
