import React from "react";
import "./Productos.css";
import Matafuego from "./Desinfecciones/img_MATAFUEGOS/Matafuegos.jpg";
import Matafuego02 from "./Desinfecciones/img_MATAFUEGOS/Matafuegos02.jpg";
import Matafuego03 from "./Desinfecciones/img_MATAFUEGOS/Matafuegos03.jpg";
import Grid from "@material-ui/core/Grid";
import { Carousel } from "react-bootstrap";

function Productos() {
  return (
    <div className="container-productos">
      <Grid container spacing={0}>
        <Grid item sm={10}>
          <div className="animation">
            <div className="animated-title">
              <div className="text-top">
                <div>
                  <span>SANID</span>
                  <span>Servicios contra</span>
                </div>
              </div>
              <div className="text-bottom">
                <div>Incendios!</div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10}>
          {/* <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <img
                  style={{ height: "30rem" }}
                  className="d-block  img-c"
                  src={Matafuego}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "30rem" }}
                  className="d-block  img-c"
                  src={Matafuego02}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "30rem" }}
                  className="d-block img-c"
                  src={Matafuego03}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Productos;
