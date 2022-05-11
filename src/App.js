
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Appoinment from "./Pages/Appointment/Appoinment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appoinment" element={<Appoinment />} /> 
      </Routes>
     
    </div>
  );
}

export default App;
