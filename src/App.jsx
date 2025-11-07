// Main app component and imports
import { useContext } from "react";
import { WeatherProvider, WeatherContext } from "./context/WeatherContext";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

// Root component - wraps everything in the weather context provider
function App() {
  return (
    <WeatherProvider> {/* This gives all child components access to weather data */}
      <div className="App">
        <h1>Weather App</h1>
        <SearchBar /> {/* Where users type city names */}
        <WeatherDisplay /> {/* Shows weather info or prompts user to search */}
      </div>
    </WeatherProvider>
  );
}

// Separate component to handle conditional rendering of weather data
// Kept this separate to make the logic cleaner and easier to understand
function WeatherDisplay() {
  const { weatherData } = useContext(WeatherContext);
  
  // Debug log to track what's in our weather state
  console.log("WeatherDisplay - weatherData:", weatherData);

  // Show weather card if we have data, otherwise show a helpful message
  return (
    <div>
      {weatherData ? <WeatherCard data={weatherData} /> : <p>Enter a city</p>}
    </div>
  );
}

export default App;
