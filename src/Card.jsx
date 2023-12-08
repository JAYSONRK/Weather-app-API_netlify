import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Card = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Mangalore');
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f1aa3734f2b00e5d92c1b9d93714aa14`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]) 
  return (
    <div className="card">
        <div className="inputs">
            <div className="input-data">
                <input type="search" 
                className="input-field" 
                placeholder="Enter the City" 
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value)
                }}/>
            </div>
        </div> 

        {!city? (<p>No data found</p>) : (<>
          <div className="info">
            <h1 className="location"><div><i className="fa-solid fa-street-view"></i></div>{search}</h1>
            <h2 className="temp">{city.temp}°Cel</h2>
            <h3 className="tempin-max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
        </div>
        
        <div className='box'>
          <div className='wave -one'> </div>
          <div className='wave -two'></div>
        </div>
        </>)} 

    </div> 
 );
}

export default Card;