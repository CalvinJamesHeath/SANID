import React from "react";
import "./Inicio.css";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/Carousel";
import Matafuego from "./Desinfecciones/img_MATAFUEGOS/Matafuegos.jpg";
import Matafuego02 from "./Desinfecciones/img_MATAFUEGOS/Matafuegos02.jpg";

function Inicio() {
  function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer más";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos";
      moreText.style.display = "inline";
    }
  }
  function readMore1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer más";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leer menos";
      moreText.style.display = "inline";
    }
  }
  return (
    <React.Fragment>
      <div className="eiaaa">
        <Grid className="css" container spacing={0}>
          <Grid item sm={12}>
            <></>
          </Grid>
          <Grid item sm={12}>
            <div className="somos">
              <div className="card">
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                  <h5 className="card-title">
                    <span id="animation__blur">¿QUIÉNES SOMOS?</span>
                  </h5>
                  <p className="card-text">
                    <span id="animation__blur__text">
                      <strong>SANID</strong> es una empresa de servicios de alta
                      tecnología y de capitales netamente argentinos, liderada
                      por empresarios con una profunda vocación de crecimiento a
                      partir de un desarrollo genuino, que es consecuencia de la
                      capacidad y la calidad humanas unidas al más actualizado
                      instrumental en función de la satisfacción{" "}
                      <span id="dots">...</span>
                      <span id="more">
                        {" "}
                        del profesional y la tranquilidad del cliente. <br />{" "}
                        Nuestra planificación es a largo plazo. Ello explica la
                        máxima responsabilidad y seriedad con que encaramos cada
                        trabajo y los recursos que permanentemente dedicamos a
                        mejorar nuestros servicios y a desarrollar nuevas
                        aplicaciones.
                        <br />
                        <b>SANID DESINFECCIONES</b> es una empresa Líder en el
                        Manejo Integral de Plagas, con una comprobada
                        trayectoria en la provincia de Córdoba y vocación de
                        servicio. Líder: nuestra condición de <b>“líderes”</b>{" "}
                        se sustenta en la seguridad que ofrecemos en nuestro
                        servicio a partir de una cuidadosa selección del
                        personal técnico, de la calidad de los productos que
                        aplicamos, de los seguros contratados con empresas de
                        notoria trayectoria y de la constante actualización en
                        nuestra metodología de trabajo para estar siempre a la
                        vanguardia en el servicio que ofrecemos.
                      </span>
                    </span>
                  </p>

                  <button onClick={readMore} id="myBtn">
                    Leer más!
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm={12}>
            <div className="container__carousel">
              <Carousel>
                <Carousel.Item>
                  <div className="container__img__inicio">
                    <img
                      className="d-block w-75 img__inicio img-responsive center"
                      // src={Matafuego}
                      src="https://images.squarespace-cdn.com/content/v1/5c4fe6773c3a538d5808a1ae/1550096875763-SPOD5M5YONGJBCLQ1GXX/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/1534060.jpg?format=2500w"
                      alt="First slide"
                    />
                  </div>
                  {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <div className="container__img__inicio">
                    <img
                      className="d-block center w-75 img__inicio img-responsive"
                      // src={Matafuego02}
                      src="https://images.squarespace-cdn.com/content/v1/5c4fe6773c3a538d5808a1ae/1550096875763-SPOD5M5YONGJBCLQ1GXX/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/1534060.jpg?format=2500w"
                      alt="Third slide"
                    />
                  </div>

                  {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <div className="container__img__inicio">
                    <img
                      className="d-block w-75 img__inicio img-responsive"
                      // src={Matafuego}
                      src="https://images.squarespace-cdn.com/content/v1/5c4fe6773c3a538d5808a1ae/1550096875763-SPOD5M5YONGJBCLQ1GXX/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/1534060.jpg?format=2500w"
                      alt="Third slide"
                    />
                  </div>

                  {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                          </p>
                        </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </div>
          </Grid>
          <Grid item sm={12}>
            <div className="objetivos">
              <div className="card">
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                  <h5 className="card-title">
                    <span id="animation__blur">NUESTROS OBJETIVOS</span>
                  </h5>
                  <p className="card-text">
                    <span id="animation__blur__text">
                      Nuestro mayor objetivo es proveer soluciones integrales a
                      nuestros clientes. Ocupar una posición de liderazgo en el
                      control infectológico de cada institución. Todos los
                      productos utilizados en cada control de plaga
                      <span id="dots1">...</span>
                      <span id="more1">
                        , están debidamente autorizados y aprobados por el{" "}
                        <strong>
                          <u>Ministerio de Salud</u>
                        </strong>
                        . Estos productos de última generación son de baja
                        toxicidad y sin olores desagradables en su mayoría,
                        evitando de esta manera provocarles molestias
                        innecesarias a nuestros clientes.
                        <br /> Con nuestro servicio, cada cliente – tanto una
                        empresa dedicada a la hotelería o gastronomía como una
                        institución de servicios médicos - contará con la más
                        avanzada tecnología en normas de bioseguridad, solamente
                        comparables con las establecidas en los países más
                        avanzados en esterilización de sectores de alto riesgo.
                      </span>
                    </span>
                  </p>
                  <button onClick={readMore1} id="myBtn1">
                    Leer más!
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={12}>
            {" "}
            <div className="zonas">
              <div className="card">
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                  <h5 className="card-title">
                    <span id="animation__blur">ZONAS DE TRABAJO</span>
                  </h5>
                  <p className="card-text">
                    <span id="animation__blur__text">
                      <strong>SANID DESINFECCIONES</strong> es una empresa Líder
                      en el Manejo Integral de Plagas, con una comprobada
                      trayectoria en la provincia de{" "}
                      <span className="Bold">Córdoba</span> y vocación de
                      servicio.
                      <br />
                      Tenemos sede en la provincia de Córdoba y contamos con
                      autorización para ofrecer nuestro servicio tanto en Ciudad
                      de Córdoba como en el interior de la provincia.
                      Actualmente cubrimos gran parte del mercado de{" "}
                      <strong>
                        Villa Carlos Paz, Cosquín, La Falda, Capilla del Monte (
                        y pueblos intermedios entre estas ciudades), Ciudad de
                        Córdoba, Alta Gracia, Deán Funes y Río Cuarto, entre
                        otras.
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Inicio;
