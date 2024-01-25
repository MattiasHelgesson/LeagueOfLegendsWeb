/* import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
      <p>Hello,! Welcome to the Champions page.</p>
      <ul>
        {data.map((item) => (
          <li key={item._id}><p>{item.name}</p><p>{item.role}</p><p>{item.picture}</p></li>
        ))}
      </ul>
    </div>
  );
}

export default Champions;a */

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
      <p>Hello,! Welcome to the Champions page.</p>
      <div className="champion-container">
        {data.map((item) => (
          <div key={item._id} className="champion-box">
            <img src={`http://localhost:2999/api/file/${item.picture}`} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Champions;
