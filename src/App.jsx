import { useState } from "react";
import reactLogo from "./assets/react.svg";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import Footer from "./components/Homepage/Footer";

import "./App.css";

import SimpleSidebar from "./admin/Admin";
import AdminDshboardPage from "./components/Page/AdminPage/AdminDshboardPage";
import Navbar from "./components/AdminComponents/AdminNavbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes />
      {/* <Footer /> */}
      {/* <AdminDshboardPage/> */}
    </div>
  );
}

export default App;
