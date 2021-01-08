import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-container">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            {/* <div className="footer"> */}
            <div className="footer-heading footer-1">
              <h2 className="footer__title">Sobre Nosotros </h2>
              <NavLink
                exact
                to="/DataFiscal"
                key={"Fiscal"}
                className="servi-links-footer"
                activeClassName="activatres"
              >
                Data Fiscal
              </NavLink>

              <NavLink
                exact
                to="/PrivacidadyTerminos"
                key={"terms"}
                className="servi-links-footer"
                activeClassName="activatres"
                id="center"
              >
                Privacidad y Términos Legales
              </NavLink>
              <a
                style={{ textDecoration: " none" }}
                href="https://www.linkedin.com/in/calvin-heath-0467a61b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="servi-links-footer">Desarrollador Web</p>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="footer-heading footer-2" id="al-footer">
              <h2 id="Contácto">Contáctanos</h2>

              <a href="tel:08004441343" id="">
                0800 444 1343
              </a>
              <a
                href="https://wa.me/+5493541533876?text=Hola,%20estoy%20interesado%20en%20sus%20Servicios!"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <div>
                <a href="tel:3541436092" id="">
                  Fijo I&nbsp;
                </a>
                <a href="tel:3541426538" id="">
                  Fijo 2
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="footer-heading footer-3">
              <h2 className="footer__title">Medios Sociales</h2>
              <a href="#" target="_blank" id="">
                Instagram
              </a>
              <a href="#" target="_blank" id="">
                Facebook
              </a>
            </div>
            {/* </div> */}
            {/* </div> */}
          </Grid>
          <Grid item lg={12}>
            <div className="footer_div">
              <footer>
                <p className="footer__text animation">
                  Copyright © 2021 SANID / Todos los Derechos Reservados
                </p>
              </footer>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Footer;
