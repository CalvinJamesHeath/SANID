import React from "react";
import "./Productos.css";
import Matafuego from "./Desinfecciones/img_MATAFUEGOS/Matafuegos.jpg";
import Matafuego02 from "./Desinfecciones/img_MATAFUEGOS/Matafuegos02.jpg";
import Matafuego03 from "./Desinfecciones/img_MATAFUEGOS/Matafuegos03.jpg";
import Grid from "@material-ui/core/Grid";

function Productos() {
  return (
    <div className="container-productos">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className="card text-center card-matafuego">
            <div className="card-body ">
              <h5 className="card-title">SANID MATAFUEGOS</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="card card-matafuegos">
            <div className="card-body">
              <h5 className="card-title">SANID MATAFUEGOS</h5>
              <p className="card-text">
                EMPRESA CERTIFICADA RECARGAS SEGUN NORMAS IRAM Nº3517 con oblea
                de certificación UTN Venta, Recarga, Reparación Planes de
                Emergencia y Evacuación Capacitaciones Tratamientas Ignífugos
                Cartelería VENTA DE INSUMOS PARA SEGURIDAD E HIGIENE
              </p>
              <p className="card-text">
                <small className="text-muted">SANID MATAFUEGOS</small>
              </p>
            </div>
            <img
              className="card-img-bottom img-matafuego1"
              src={Matafuego}
              alt=""
            />
          </div>
          <p></p>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="card card-matafuegos">
            <div className="card-body">
              <h5 className="card-title">SANID MATAFUEGOS</h5>
              <p className="card-text">
                EMPRESA CERTIFICADA RECARGAS SEGUN NORMAS IRAM Nº3517 con oblea
                de certificación UTN Venta, Recarga, Reparación Planes de
                Emergencia y Evacuación Capacitaciones Tratamientas Ignífugos
                Cartelería VENTA DE INSUMOS PARA SEGURIDAD E HIGIENE
              </p>
              <p className="card-text">
                <small className="text-muted">SANID MATAFUEGOS</small>
              </p>
            </div>
            <img
              className="card-img-bottom img-matafuego1"
              src={Matafuego02}
              alt=""
            />
          </div>
          <p></p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Productos;
