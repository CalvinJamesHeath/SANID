import React from "react";
import "./App.css";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Footer/Form";
import Desinfecciones from "./components/Pages/Desinfecciones";
import Productos from "./components/Pages/Productos";
import Inicio from "./components/Pages/Inicio";
import OtrosServicios from "./components/Navbar/OtrosServicios";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer/Footer";
import DataFiscal from "./components/Footer/DataFiscal";
import PrivacidadyTerminos from "./components/Footer/PrivacidadyTerminos";

const toggleBackToTop = () => {
  var offset = 0,
    scrollTop = 1,
    $btn = $(".back-to-top");

  scrollTop = $(window).scrollTop();
  if (scrollTop > offset) {
    $btn.fadeIn();
  } else {
    $btn.fadeOut();
  }
};
function App() {
  // window.onload = toggleBackToTop;
  $(window).scroll(function () {
    toggleBackToTop();
  });

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
          <Route path="/DataFiscal" exact component={DataFiscal} />
          <Route path="/PrivacidadyTerminos" component={PrivacidadyTerminos} />
        </Switch>
        <div className="back-to-top">
          <a href="#" className="subir" id="">
            <i className="fas fa-arrow-circle-up"></i>
          </a>
        </div>
        <div className="whatsapp">
          <a
            href="https://wa.me/+5493541533876?text=I'm%20interested%20in%20your%20car%20for%20sale"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
