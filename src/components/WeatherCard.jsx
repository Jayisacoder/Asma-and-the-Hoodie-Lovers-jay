

export default function WeatherCard({ data }) {
  const timestamp = data.dt; // from API
  const date = new Date(timestamp * 1000); // multiply by 1000 to convert seconds → milliseconds
  const day = date.toLocaleDateString("en-US", { weekday: "long" }); // "Monday"
  const month = date.toLocaleDateString("en-US", { month: "long" }); // "October"
  const time = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }); // "3:42 PM"
  
 


  return (
    <>
    <div className="weather-nav">Todays Weather 
  <div className="MainPage">
    <div className="navbar">
      <sub className="weather-nav-text"> </sub>
    </div>
  <div className="Firstpage-Nav">Todays Weather 
    <div className="page-nav-text">.
      <div className="weather-app-panel">
          <div className="box"> {data.name || "Philadelphia"} </div>
          <div className="boxnum"> {data.main.temp || 57} °C </div>
          <div className="box"> {data.weather[0].description || "Mostly Cloudy Today"} </div> 
      </div>
      </div>
    </div>

       
  <div className="Firstpage-Nav">
    <div className="page-nav-text">THE WEATHER APP
      <table className="weather-app-status">
        <thead>
        <tr>
          <th className="status-dates"> {month || "10/"}</th>
          <th className="status-dates"> {day || "26/"}</th>
           <th className="status-dates"> {time || "8:00/"}</th>
        </tr>
      </thead>
      
    <tbody>
        <tr>
          <td className="status"> Feels Like </td>
          <td className="status"> {data.main.feels_like || " 58"} </td>
        </tr>
        

        <tr>
          <td className="status"> Wind </td>
          <td className="status"> {data.wind.deg || "  5"} mph </td>
        </tr>

        <tr>
          <td className="status"> Wind Gusts </td>
          <td className="status"> {data.wind.gust || " 4"} mph </td>
        </tr>

        <tr>
          <td className="status"> Air Quality</td>
          <td className="status"> {data.main.humidity || " poor"}</td>
        </tr>
        </tbody>
      </table>
      </div>
      </div>
      
    </div>
</div>

<div className="dates">
    <div className="date-slots">
      <div className="slot">Wed</div>
       <div className="slot">Thu</div>
        <div className="slot">Fri</div>
         <div className="slot">Sat</div>
          <div className="slot">Sun</div>
    </div>
    

    <div className="bottomslot">
      <p>The weather forcast</p>
      <button>TODAY</button>
    </div>
  </div>
  </>
   


    
  );
}
