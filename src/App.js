import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WorkWithUs from "./pages/WorkWithUs";
import NotifyForm from "./components/NotifyForm";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import CertifiedCyberExpert from "./pages/courses/certifiedCyberExpert";
import Training from "./pages/Training";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainingEvents from "./pages/TrainingEvents";

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
            path="/courses/certified-cyber-expert"
            element={<CertifiedCyberExpert />}
          />
          <Route path="/training-events" element={<TrainingEvents />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
