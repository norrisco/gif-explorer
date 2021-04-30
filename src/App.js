import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import GifList_Old from './Components/GifList_Test';
import GifList from './Components/GifList';
import Search from './Components/Search';
import Header from './Components/Header';

const App = () => {
  const [gifData, setGifData] = useState([]);
  const [loading, setLoading] = useState(true);

  const api_key = 'b2sRfoYJSLxA8JdAujkeuH6eavKtbUb3' //Personal App Key
  const api_key2 = 'dc6zaTOxFJmzC' //Shared Key
  const query_limit = 12;
  
  useEffect(() => {
    searchGiphy();

    /////// Trending /////// 
    // axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`)
    //   .then(res => {
    //     setGifData(res.data.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }, [])

  const searchGiphy = (query = 'dog') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=${query_limit}&api_key=${api_key2}`)
      .then(response => {
        setGifData(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
      });
  }

  console.log(gifData);

  return (
    <div className="App">

      <Header />

      <Search searchGiphy={searchGiphy} />
      {
        loading
        ? <p>Loading...</p>
        : <GifList gifData={gifData} /> 
        // : <GifList_Old gifData={gifData} /> 
      }
      
    </div>
  );
}

export default App;
