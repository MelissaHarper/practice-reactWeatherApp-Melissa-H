import { useParams, Link } from 'react-router-dom';
import data from "../data/cityData.json"


function CityForecast() {
    const cityData = data.map(city => {
        return {...city}
    });
    const { cityName } = useParams();

    const city = cityData.find((c, index) => c[index] === cityName);
    if (!cityName || isNaN(cityName) || !city) {
    return (
        <div className="container">
        <h1 className="title">City Forecast Not Found</h1>
        <p className="error">Invalid or missing city.</p>
        <Link to="/" className="back-link">Back to City List</Link>
        </div>
    );
    }
    return (
    <div className="container">
        <h1 className="title">{cityName}</h1>
        <p className="description">{city.summary}</p>
        <Link to="/" className="back-link">Back to City List</Link>
    </div>
    );
}

export default CityForecast;