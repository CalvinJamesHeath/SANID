import { Grid } from "@material-ui/core";
import React from "react";
import "./Tratamiento.css";

function ControlR() {
  function readMore3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

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
      <Grid container spacing={0}>
        <Grid className="lightgray" item sm={12}>
          <div className="Desinfeccion">
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                <h5 className="card-title">
                  <span id="animation__blur">
                    TRATAMIENTOS DE ULTRA BAJO VOLUMEN CON EQUIPOS PESADOS
                  </span>
                </h5>

                <p className="card-text">
                  <span id="animation__blur__text">
                    <u>
                      SANID Desinfecciones es la primer y única empresa en la
                      provincia de Córdoba{" "}
                    </u>{" "}
                    en adquirir la tecnología necesaria para ofrecer este
                    novedoso y conveniente servicio. Le brindamos aquí los
                    detalles acerca de su modo de implementación y ventajosos
                    <b> beneficios</b>. Sepa usted por qué le recomendamos que
                    considere utilizarlo. <br />
                    <b>
                      ¿QUÉ ES EL UBV (ultra bajo volumen) O COMUNMENTE LLAMADO
                      “TRATAMIENTO ESPACIAL PARA EL CONTROL DE INSECTOS
                      VOLADORES”?
                    </b>{" "}
                    <br />
                    Es la nebulización del insecticida más su vehículo (gas oil,
                    kerosene, agua, etc.) en pequeñísimas gotas (el 80% de ellas
                    son menores a 20 micrones), ya sea por equipos aplicadores
                    de niebla fría (nebulizadores portátiles pesados) o
                    productores de niebla caliente (termofumigadoras portátiles
                    y pesadas). (Nota: llamamos <b>equipos portátiles</b> a
                    aquellos que pueden ser trasladados físicamente por una
                    persona. Y<b> equipos pesados</b> a los cuales hay que
                    montarlos sobre camionetas, trailers, camiones, etc.)
                    <br />
                    <b>
                      {" "}
                      ¿QUÉ BENEFICIOS SE OBTIENEN AL REALIZAR EL CONTROL DE
                      MOSQUITOS CON UN EQUIPO DE UBV?
                    </b>
                    <li style={{ listStyleType: "upper-roman" }}></li>
                    La cantidad de insecticida a utilizar es ínfima en relación
                    al área a tratar: Ej: utilizando permetrina al 10% o
                    deltametrina al 1.5% serán necesarios entre 100 o 200 cc.
                    del plaguicida por hectárea, con lo cual{" "}
                    <b>el impacto ambiental se reduzca drásticamente.</b>
                    <li style={{ listStyleType: "upper-roman" }}></li>
                    Por su tamaño, la gota queda suspendida en el aire el tiempo
                    suficiente como para impactar en la gran mayoría de los
                    mosquitos, moscas y demás insectos voladores que se
                    encuentren activos en la zona tratada. Gracias a esto, la
                    <b> efectividad</b> lograda es muy <b>superior</b> a la que
                    se obtiene con equipos de bajo volumen (cuya gota, mayor a
                    100 micrones, llega rápidamente al suelo casi sin entrar en
                    contacto con los insectos voladores).
                    <li style={{ listStyleType: "upper-roman" }}></li>
                    Así como la cantidad de <b>insecticida</b> a aplicar por
                    hectárea es muy baja, lo mismo sucede con su vehículo (gas
                    oil, kerosene, agua, aceites, etc.), debido a que la
                    dilución (vehículo + insecticida) que se nebuliza por
                    hectárea será de aproximadamente entre 1 y 2 litros.
                    <li style={{ listStyleType: "upper-roman" }}></li>
                    No hay necesidad de trasladar a la población: las
                    aplicaciones de UBV, al ser tan bajas en concentración de
                    insecticida,{" "}
                    <b>
                      no acarrean riesgo para seres humanos, mamíferos ni aves
                    </b>
                    . El Ministerio de Salud y la EPA de EEUU indican que,
                    cuando los insecticidas se utilizan conforme las
                    instrucciones de la etiqueta, los efectos adversos no son
                    posibles. Sí es conveniente comunicar a la población que las
                    personas alérgicas se mantengan a distancia prudencial
                    durante la aplicación.
                    <br />{" "}
                    <b>
                      ¿CUÁL ES EL HORARIO IDEAL PARA REALIZAR UN TRATAMIENTO DE
                      ESTA NATURALEZA?
                    </b>
                    <br /> El horario más conveniente es cuando el{" "}
                    <b>insecto</b> a tratar se encuentra más <b>activo</b>. En
                    el caso, por ejemplo, de mosquitos, es por la mañana de 4.30
                    a 10 hs., y por la tarde de 18 a 22 hs. En estos lapsos de
                    tiempo es cuando <b>mejor resultado</b> vamos a obtener.
                    Vale aclarar que con esta nueva tecnología puede atacarse
                    todo tipo de insectos voladores, siendo los más frecuentes
                    los ya mencionados: moscas y mosquitos.
                    <br />{" "}
                    <b>
                      RECOMENDACIONES A TENER EN CUENTA AL REALIZAR UN
                      TRATAMIENTO DE UBV
                    </b>{" "}
                    <br />
                    Comunicar a la población, en primer lugar, el{" "}
                    <b>peligro que implica convivir con los mosquitos</b>. En
                    segundo lugar, notificarle que el trabajo que se va a
                    realizar es en
                    <b>beneficio de la comunidad,</b> qué tipo de producto se va
                    a utilizar y el <b>bajo riesgo toxicológico</b> para el
                    hombre y sus mascotas, el ruido que producirán las
                    maquinarias, las precauciones que tendrán que tener los que
                    sufran alergias, la conveniencia de no dejar juguetes de los
                    niños tirados en los parques mientras se realiza el
                    tratamiento, etc.
                    <br /> <b>ACERCA DE SANID DESINFECCIONES</b>
                    <br /> Somos una{" "}
                    <b>
                      empresa líder en servicio de Sanidad Ambiental
                      (desinfección, asepsias, desinsectación, control de
                      roedores y limpiezas)
                    </b>
                    . Nuestro principal objetivo es brindar a todos nuestros
                    clientes Asesoramiento Profesional y la más amplia gama de
                    servicios en el control de microorganismos y de plagas
                    (vectores de enfermedades, por ejemplo: insectos, arácnidos,
                    roedores, etc.). <br />
                    <b> Utilizamos normas de bioseguridad,</b> solamente
                    comparables con las establecidas en los países más avanzados
                    en higiene hospitalaria.
                    <br /> Nuestra modalidad de trabajo incluye:{" "}
                    <li>
                      {" "}
                      <u>EXPERIENCIA:</u>
                    </li>{" "}
                    Hace más de <b>veinte años</b> que trabajamos en el
                    desarrollo de mejores y más seguros métodos de control.{" "}
                    <li>
                      <u>VOCACIÓN DE SERVICIO:</u>
                    </li>
                    Nuestra área de trabajo abarca a las ciudades de{" "}
                    <b>
                      Villa Carlos Paz, Córdoba, Tanti, Cosquín, La Falda,
                      Capilla del Monte, Alta Gracia, Río Cuarto
                    </b>{" "}
                    así como otros puntos de la provincia. <br />
                    Estamos disponibles full time a través de la línea
                    telefónica{" "}
                    <a href="tel:08004441343" id="">
                      0800-444-1343
                    </a>{" "}
                    para poder atender a su problema con la urgencia que
                    amerite.
                    <li>
                      {" "}
                      <u>EFICIENCIA E IDONEIDAD:</u>
                    </li>{" "}
                    Los <b>productos</b> que utilizamos son totalmente avalados
                    por el
                    <b>Ministerio de Salud Pública y el Senasa</b>.{" "}
                    <li>
                      {" "}
                      <u>PROFESIONALIDAD:</u>
                    </li>
                    Por su nivel de competencia nuestro personal técnico es
                    asesorado en<span id="dots3">...</span>
                    <span id="more3">
                      {" "}
                      <b>Laboratorios y Organismos oficiales</b> en la
                      verificación de métodos y productos para la mejora de la
                      ecología y el saneamiento ambiental.{" "}
                      <li>
                        {" "}
                        <u>OPERATIVIDAD:</u>
                      </li>{" "}
                      Todo{" "}
                      <b>
                        nuestro personal técnico operativo posee alto nivel de
                        capacitación
                      </b>{" "}
                      respecto a los hábitos de las distintas plagas y el uso de
                      productos adecuados para combatirlas.{" "}
                      <li>
                        {" "}
                        <u>SEGURIDAD:</u>
                      </li>
                      Utilizamos sólo productos levemente tóxicos, ubicando a
                      los mismos en los momentos y lugares exactos, evitando así
                      perjuicios para las <b>personas, animales y plantas</b>.
                      <li>
                        {" "}
                        <u>TECNOLOGÍA:</u>
                      </li>{" "}
                      Contamos con un completo parque de{" "}
                      <b>maquinarias adecuadas</b>
                      para cada tipo de tareas. Durante el año 2009 hemos
                      incorporado esta novedosa máquina para realizar
                      tratamientos espaciales de ultra bajo volumen que permite
                      atacar a todo tipo de insectos voladores con mayor
                      efectividad y bajo costo ambiental.{" "}
                    </span>
                  </span>
                </p>
                <button onClick={readMore3} id="myBtn3">
                  Leer más!
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ControlR;
