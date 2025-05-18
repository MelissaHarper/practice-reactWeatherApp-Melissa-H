import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import CityForecast from './components/CityForecast';
import CityList from './components/CityList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/task/:cityName" element={<CityForecast/>} />
      </Routes>
         </Router>
  );

}

export default App
