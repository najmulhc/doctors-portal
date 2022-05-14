import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Appoinment from "./Pages/Appointment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Navbar from "./Pages/Shared/Navbar";
import "react-toastify/dist/ReactToastify.css";
import RouteProtector from "./Pages/Shared/RouteProtector";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/appoinment"
          element={
            <RouteProtector>
              <Appoinment />
            </RouteProtector>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
