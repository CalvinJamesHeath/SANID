import { Grid } from "@material-ui/core";
import React from "react";
import "./Mip.css";

function Mip() {
  function readMore3() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");

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
    <div>
      <Grid container spacing={0}>
        <Grid className="lightgray" item sm={12}>
          <div className="mip__contenedor">
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                <h5 className="card-title">
                  <span id="animation__blur">MANEJO INTEGRAL DE PLAGAS</span>
                </h5>
                <p className="card-text">
                  <span id="animation__blur__text">
                    {" "}
                    <u>SANID DESINFECCIONES</u> es una <b>empresa Líder</b> en
                    el Manejo Integral de Plagas, con una comprobada trayectoria
                    en la provincia de Córdoba y vocación de servicio.
                    <br /> <b>Manejo Integral de Plagas:</b> Nuestro sistema de
                    trabajo no es únicamente exterminar plagas, sino que existe
                    un grupo de técnicos que se ocupa de investigar cuál es la
                    posible causa del problema y, en base a esta razón,
                    planificar el método de control más conveniente, realizar el
                    tratamiento específico, evaluar los resultados obtenidos
                    tras el servicio y supervisar periódicamente las condiciones
                    y sistemas de control paras evitar un nuevo brote de la/s
                    plaga/s. En este sentido, enmarcamos nuestro modo de operar
                    en el sistema <b>“MIP”, Manejo Integral de Plagas </b>. El
                    fundamento del MIP es la combinación de varias técnicas,
                    cuya interrelación lleva a <b>mejores resultados </b> en el
                    mediano y <b>largo plazo</b>, mayor seguridad para técnicos
                    y clientes y un
                    <b> menor impacto ambiental</b>. El énfasis está en
                    <b>“control” </b> no en “erradicación”. MIP sostiene que la
                    erradicación completa de una plaga es a menudo imposible y
                    que intentarlo puede ser sumamente costoso, insalubre y en
                    general irrealizable. Es mejor decidir cual es el nivel
                    tolerable de una plaga y aplicar controles cuando se excede
                    ese nivel (umbral de acción). <br />
                    <u>Las ventajas de implementar un plan MIP son:</u> <br />
                    <b className="list__mayores">Mayores beneficios:</b>{" "}
                    Nuestras formulaciones son muy
                    <b> letales para los insectos</b>, en cambio, son
                    prácticamente
                    <b> inofensivas para el ser humano y animales domésticos</b>
                    . Estas formulaciones son biológicamente degradables, muy
                    seguras para la ecología y no producen concentraciones
                    tóxicas en la tierra, atmósfera, plantas ni animales. Las
                    formulaciones que utilizamos están debidamente inscriptas
                    ante el{" "}
                    <b>
                      Ministerio de Salud Publica de la Nación, Ministerio de
                      Agricultura y Ganadería
                    </b>{" "}
                    y además cuentan con la aprobación de uso de la{" "}
                    <b>
                      Agencia de Protección Ambiental de los Estados Unidos
                      (E.P.A.)
                    </b>
                    .<br /> Otros beneficios<span id="dots4">...</span>
                    <span id="more4">
                      {" "}
                      obtenidos con este programa que utilizamos son los
                      siguientes:
                      <li className="list__desinfectar" start="X">
                        Gran poder larvicida.
                      </li>{" "}
                      <li className="list__desinfectar">
                        Amplio aspecto de acción, al combatir todas las plagas.
                      </li>
                      <li className="list__desinfectar">
                        Enorme persistencia, debido al efecto residual
                        prolongado.
                      </li>
                      <li className="list__desinfectar">
                        No manchan ni tienen olor, no deterioran el mobiliario.
                      </li>
                      <u>Horarios de trabajo:</u> En coordinación con el
                      cliente, haremos un cronograma de trabajo, en donde
                      respetaremos los índices de ocupación y mantenimiento.{" "}
                      <br />
                      <u>Registros y certificaciones:</u> Con el propósito que
                      el cliente pueda satisfacer en todos sus extremos a las
                      autoridades que eventualmente le practiquen{" "}
                      <b>AUDITORIAS DE CALIDAD</b>, nuestra compañía le
                      entregará a este departamento un certificado (con validez
                      de 30 días) para ser colocado en un lugar visible, en
                      donde <b>SANID DESINFECCIONES</b> garantiza y certifica
                      que en las instalaciones del cliente se ha realizado un
                      trabajo de desinfección.
                    </span>
                  </span>
                </p>
                <button onClick={readMore3} id="myBtn4">
                  Leer más!
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Mip;
