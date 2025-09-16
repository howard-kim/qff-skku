// App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Schedule from "./pages/Schedule.jsx";
import Speakers from "./pages/Speakers.jsx";
import Organizers from "./pages/Organizers.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Faq from "./pages/Faq.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
