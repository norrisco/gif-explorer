import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GifList from './Components/GifList';
import Search from './Components/Search';
import Header from './Components/Header';

const App = () => {
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    searchGiphy();

    // axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`)
    //   .then(res => {
    //     setGifData(res.data.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })

  }, [])

  const searchGiphy = (query) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        setGifData(response.data.data)
      })
      .catch(error => {
        console.log(error)
      });
  }

  // console.log(gifData);

  return (
    <div className="App">

      <Header />

      <Search searchGiphy={searchGiphy} />
      
      <GifList gifData={gifData} />
      
    </div>
  );
}

export default App;
