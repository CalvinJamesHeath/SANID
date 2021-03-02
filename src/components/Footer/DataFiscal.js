import React from "react";
import "./DataFiscal.css";
import Fiscal from "./dataFiscal.jpg";
import Grid from "@material-ui/core/Grid";

export default function DataFiscal() {
  return (
    <Grid className="dtf" container spacing={0}>
      <Grid item md={12}>
        <div className="card__imgc">
          <img src={Fiscal} alt="Fiscal" className="fiscal" />
        </div>
      </Grid>
      <div className="card-body">
        <h5 className="card-title titulo-fiscal">
          Administración Federal de Ingresos Públicos
        </h5>
        <p className="card-text">VENTA DE INSUMOS PARA SEGURIDAD E HIGIENE</p>
        <a
          href="https://www.afip.gob.ar/sitio/externos/default.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          AFIP
        </a>
      </div>
    </Grid>
  );
}
