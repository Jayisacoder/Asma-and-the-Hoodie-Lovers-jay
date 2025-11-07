// React Context for sharing weather data across the entire app
// This lets us avoid prop drilling - passing data down through multiple component levels
import { createContext, useState } from "react";

// Create the context - this is like creating a "global variable" that components can access
export const WeatherContext = createContext();

// Provider component that wraps around our app and provides the weather state
// Any child component can access weatherData and setWeatherData through useContext
export const WeatherProvider = ({ children }) => {
  // This holds our current weather data from the API
  // Starts as null until user searches for a city
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children} {/* All the app components go here */}
    </WeatherContext.Provider>
  );
};
