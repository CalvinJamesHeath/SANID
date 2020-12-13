import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Desinfecciones from "./components/Pages/Desinfecciones";
import Productos from "./components/Pages/Productos";
import Inicio from "./components/Pages/Inicio";
import OtrosServicios from "./components/Navbar/OtrosServicios";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Redirect to="/" component={Inicio} />
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/Desinfecciones" component={Desinfecciones} />
          <Route path="/Matafuegos" component={Productos} />
          <Route path="/OtrosServicios" component={OtrosServicios} />
        </Switch>
        <div className="whatsapp">
          <a
            href="https://wa.me/+5493541533876"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
