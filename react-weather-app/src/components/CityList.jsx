import { Link } from "react-router-dom";
import data from "../data/cityData";

const CityList = () => {
  let allCities = Object.keys(data);
  console.log(allCities);

  const cityLinks = (
    <div className="container">
      <h2 className="title">City List</h2>
      <ul className="city-list">
        {allCities.map((city, index) => (
          <li key={index} className="city-list-item">
            <Link to={`/forecast/${city}`}>
              <span className="city-link">{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return cityLinks;
};

export default CityList;
