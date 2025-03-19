import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Personal from "./pages/Personal";

function App() {
  const [dark, setDark] = useState("light");

  function toggleDark() {
    setDark(dark === "dark" ? "light" : "dark");
    console.log(dark);
  }
  return (
    <div className={dark}>
      <div className="bg-white dark:bg-black dark:text-white">
        <ToastContainer position="top-center"></ToastContainer>
        <Header toggleDark={toggleDark} mode={dark} />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="/login" element={<Login />} />
          <Route exect path="/:userId" element={<Personal />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
