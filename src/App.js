import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;