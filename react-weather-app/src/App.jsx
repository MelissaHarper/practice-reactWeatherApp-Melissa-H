import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>City Forecast Lookup</h1>
        <Routes>
          <Route path="/" element={<CityList />} />
          <Route path="/forecast/:cityName" element={<CityForecast />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
