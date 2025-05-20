import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import weatherData from "../data/cityData.json";

function CityForecast() {
  const { cityName } = useParams();
  const [weather, setWeather] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const data = weatherData[cityName];
    data ? setWeather(data) : setWeather(null);
  }, [cityName]);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!weather) {
    return (
      <div className="forecast">
        <h2>City Not Found</h2>
        <p>Sorry, no weather data available for {cityName}.</p>
        <Link to="/">Back to City List</Link>
      </div>
    );
  }

  return (
    <div className="forecast">
      <h2>{cityName}</h2>
      <p className="summary">
        <strong>Summary:</strong> {weather.summary}
      </p>
      <button onClick={scrollToDetails}>View Details</button>
      <div ref={detailsRef} className="details">
        <h3>Detailed Forecast</h3>
        <p>{weather.details}</p>
      </div>
      <Link to="/">Back to City List</Link>
    </div>
  );
}

export default CityForecast;
