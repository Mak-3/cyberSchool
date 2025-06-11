import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WorkWithUs from "./pages/WorkWithUs";
import NotifyForm from "./components/NotifyForm";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Training from "./pages/Training";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainingEvents from "./pages/TrainingEvents";
import CyberExpert from "./pages/courses/cyberExpert";
import CertifiedCyberExpert from "./pages/certification/certifiedCyberExpert";

function App() {
  return (
    <div className="">
      <Router basename="/cyberschool">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <AboutUs />
                </section>
                <section id="online-training">
                  <Training />
                </section>
                <section id="work-with-us">
                  <WorkWithUs />
                </section>
              </>
            }
          />
          <Route
            path="/training/cyber-expert"
            element={<CyberExpert />}
          />
          <Route path="/training-events" element={<TrainingEvents />} />
          <Route path="/certified-cyber-expert" element={<CertifiedCyberExpert />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
