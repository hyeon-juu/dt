import NavBar from "./components/NavBar";
import HolidayParking from "./pages/HolidayParking";
import TouristInfo from "./pages/TouristInfo";
import './App.css';
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* 
        TODO: BrowserRouter, Routes, Route를 사용해서 URL에 따라 
        HolidayParking / TouristInfo가 바뀌도록 하세요. 
      */}
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to={"/parking"} />} />
          <Route path='/parking' element={<HolidayParking />} />
          <Route path='/tourist' element={<TouristInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;