import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Desinfecciones from "./components/Pages/Desinfecciones";
import Productos from "./components/Pages/Productos";
import Inicio from "./components/Pages/Inicio";
import OtrosServicios from "./components/Navbar/OtrosServicios";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Desinfecciones" component={Desinfecciones} />
          <Route path="/Matafuegos" component={Productos} />
          <Route path="/" exact component={Inicio} />
          <Route path="/OtrosServicios" component={OtrosServicios} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
