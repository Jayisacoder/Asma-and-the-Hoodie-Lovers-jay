import { useState, useContext } from "react";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  // State to track what the user types in the search box
  const [city, setCity] = useState("");
  
  // Get the function to update weather data from our context
  const { setWeatherData } = useContext(WeatherContext);

  // Pull API credentials from environment variables - this keeps them secure
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = import.meta.env.VITE_WEATHER_API_URL;

  // This function handles getting weather data from the OpenWeather API
  const fetchWeather = async () => {
    // Debug logs to help troubleshoot if something goes wrong
    console.log("fetchWeather called with city:", city);
    console.log("API Key:", apiKey ? "Present" : "Missing");
    console.log("API URL:", apiUrl);

    // Make sure we have the API setup before trying to make requests
    if (!apiKey || !apiUrl) {
      console.error("API key or URL is missing. Please check your .env file.");
      alert("API configuration is missing. Please add your weather API key.");
      return;
    }

    // Don't waste API calls on empty searches - trim() removes extra spaces
    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }

    try {
      // Build the API URL - using imperial units to get Fahrenheit temperatures
      const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
      
      console.log("Making API call to:", url);
      
      // Actually make the HTTP request to OpenWeather
      const response = await axios.get(url);
      
      console.log("API response:", response.data);
      
      // Update our app's state with the new weather data
      setWeatherData(response.data);
      console.log("Weather data set successfully");
    } catch (error) {
      // Something went wrong - could be network issue, bad city name, API problem, etc.
      console.error("Error fetching weather:", error);
      console.error("Error details:", error.response?.data);
      alert(`Failed to fetch weather data: ${error.response?.data?.message || error.message}`);
      setWeatherData(null); // Clear any old data
    }
  };

  // Handle form submission - works for both clicking Search and pressing Enter
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the form from refreshing the page
    fetchWeather();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update state as user types
      />
      <button type="submit">Search</button>
    </form>
  );
}
