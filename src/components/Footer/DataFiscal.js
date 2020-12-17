import React from "react";
import "./DataFiscal.css";
import Fiscal from "./dataFiscal.jpg";

export default function DataFiscal() {
  return (
    <>
      <div className="card" style={{ textAlign: "center" }}>
        <img src={Fiscal} alt="Fiscal" />
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
      </div>
    </>
  );
}
