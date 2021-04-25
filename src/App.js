import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GifList from './Components/GifList';

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`)
      .then(res => {
        setGifs(res.data.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  console.log(gifs);

  return (
    <div className="App">

      <GifList gifs={gifs} />
      
    </div>
  );
}

export default App;
