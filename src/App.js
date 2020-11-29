import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Servicios from "./components/Pages/Servicios";
import Productos from "./components/Pages/Productos";
import Inicio from "./components/Pages/Inicio";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/servicios" exact component={Servicios} />
          <Route path="/productos" exact component={Productos} />
          <Route path="/" exact component={Inicio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
