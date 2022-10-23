import './App.css';
import { useState, useEffect } from 'react'
import { fetchData } from './fetchWeather';
import DisplayWeather from './components/DisplayWeather';

 function App() {

  const [city, setCity] = useState("") 
  const [weather, setWeather] = useState([])
  

  useEffect(() => {
    let timer = setTimeout(() => fetchData(city).then((res)=>{
      setWeather(res)
    }), 700)
    return () => {
      clearTimeout(timer);
    };
  }, [city]);

  const handleChange = (e) => {
    setCity(e.target.value)
  }
  
  return (
    <div className="App">
      <div className="main">
        <div className="search-form">
          <input
            type="text"
            value={city}
            onChange={handleChange}
            className="search"
            placeholder="Type city name..."
          ></input>
        </div>

        {typeof weather.main != "undefined" ? (
          <DisplayWeather weatherStats={weather} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;

