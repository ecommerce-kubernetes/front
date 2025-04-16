import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/main"} replace />} />
      <Route path="/main" element={<HomePage />} />
    </Routes>
  );
}

export default App;
