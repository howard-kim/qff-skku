import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="qff-skku/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/schedule" element={<div>Schedule Page</div>} />
        <Route path="/speakers" element={<div>Speakers Page</div>} />
        <Route path="/organizers" element={<div>Organizers Page</div>} />
        <Route path="/sponsors" element={<div>Sponsors Page</div>} />
      </Routes>
    </Router>
  );
  // return <Home />;
}

export default App;
