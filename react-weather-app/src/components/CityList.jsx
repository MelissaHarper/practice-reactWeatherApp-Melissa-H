import { Link, useEffect, useState } from "react"
import data from "../data/cityData"


const CityList = () => {

    const [allCities, setAllCities] = useState([]);

    let getCities = () => {
        let cities = Object.keys(data);
        setAllCities(cities)
    }

    useEffect(() => {
        getCities(data);
    }, []);

    return (
        <div className="container">
    <h1 className="title">City List</h1>
    <ul className="city-list">
    {allCities.map((city, index) => (
        <li key={index} className="task-item">
        <Link to={`/forecast/${city}`} className="city-link">
            {city}
        </Link>
        </li>
    ))}
    </ul>
</div>
);

}

export default CityList