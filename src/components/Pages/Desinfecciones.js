import React from "react";
import "./Desinfecciones.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Asepcia from "./Desinfecciones/Asepcia";
import Tratamiento from "./Desinfecciones/Tratamiento";
import Desinfeccion from "./Desinfecciones/Desinfeccion";
import Mip from "./Desinfecciones/Mip";
import Grid from "@material-ui/core/Grid";

function Desinfecciones() {
  return (
    <React.Fragment>
      <div className="container-servicios">
        <div className="links">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={6} lg={2} justify="space-evenly">
              <NavLink
                exact
                to="/Desinfecciones"
                key={"asepcia"}
                className="servi-links"
                activeClassName="activado"
              >
                <h5>Desinfección</h5>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2} justify="space-evenly">
              <NavLink
                to="/Desinfecciones/Tratamiento"
                key={"asepcia"}
                className="servi-links"
                activeClassName="activado"
              >
                <h5>Tratamiento UBV</h5>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2} justify="space-evenly">
              <NavLink
                to="/Desinfecciones/Asepcia"
                key={"asepcia"}
                className="servi-links"
                activeClassName="activado"
              >
                <h5>Asepcia</h5>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2} justify="space-evenly">
              <NavLink
                to="/Desinfecciones/Mip"
                key={"asepcia"}
                className="servi-links"
                activeClassName="activado"
              >
                <h5 className="mip">Manejo integral de Plagas</h5>
              </NavLink>
            </Grid>
          </Grid>
        </div>
      </div>
      <Switch>
        <Route path="/Desinfecciones/Asepcia" component={Asepcia} />
        <Route path="/Desinfecciones/Tratamiento" component={Tratamiento} />
        <Route path="/Desinfecciones" component={Desinfeccion} />
        <Route path="/Desinfecciones/Mip" component={Mip} />
      </Switch>
    </React.Fragment>
  );
}

export default Desinfecciones;
