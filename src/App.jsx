import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<HomePage />} />
    </Routes>
  );
}

export default App;
