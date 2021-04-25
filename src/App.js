import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GifList from './Components/GifList';

const App = () => {
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`)
      .then(res => {
        setGifData(res.data.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  // console.log(gifData);

  return (
    <div className="App">

      <h1>Gifs</h1>
      <GifList gifData={gifData} />
      
    </div>
  );
}

export default App;
