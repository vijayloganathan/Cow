import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home.jsx";
import Landingpage from "./components/Landingpage.jsx";
// import axios from "axios";

export default function App() {

  return (
    <>ranjani1
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          {/* <Route path="/home/*" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
}
