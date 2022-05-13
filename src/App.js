
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appoinment from "./Pages/Appointment/Appoinment";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appoinment" element={<Appoinment />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </div>
  );
}

export default App;
