import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Landingpage from "./components/Landingpage.jsx";

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
