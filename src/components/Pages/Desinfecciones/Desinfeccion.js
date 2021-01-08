import React from "react";
import "./Desinfeccion.css";
import Grid from "@material-ui/core/Grid";

function Desinfeccion() {
  function readMore2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

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
      <Grid className="css" container spacing={0}>
        <Grid item sm={12}>
          <div className="Desinfeccion">
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                <h5 className="card-title">
                  <span id="animation__blur">DESINFECCIÓN</span>
                </h5>
                <p className="card-text">
                  <span id="animation__blur__text">
                    La <b>desinfección</b> es un proceso selectivo que se emplea
                    para destruir o inactivar a los organismos patógenos,
                    especialmente las bacterias de origen entérico. Las
                    bacterias en condiciones naturales, rara vez se exponen a la
                    acción de agentes químicos en concentraciones suficientes
                    para provocar su muerte.
                    <br /> Sin embargo, el hombre se sirve de una gran variedad
                    de productos químicos para matar a los microorganismos y
                    controlar su desarrollo. Se busca que éstos sean lo más
                    tóxicos para los <b>microorganismos</b> pero con efectos
                    mínimos para el hombre, los animales y las plantas.
                    <br />{" "}
                    <b>
                      La desinfeccion es importante en la prevención de
                      enfermedades infecto-contagiosas que diezman el estado de
                      salud de las personas y los animales.
                    </b>{" "}
                    Diferentes métodos de desinfección:
                    <li>
                      {" "}
                      <b>
                        <u>Desinfección Física:</u>
                      </b>{" "}
                    </li>{" "}
                    Calor, calor más presión (autoclave), calor húmedo, luz
                    ultravioleta. De todos los agentes desinfectantes, el{" "}
                    <b>calor</b>
                    es el más efectivo. En las instalaciones y equipos donde sea
                    factible, debería aplicarse tomando las precauciones de
                    rigor. Desafortunadamente hay limitaciones de orden práctico
                    para su uso.
                    <li>
                      <b>
                        <u>Desinfección química:</u>
                      </b>{" "}
                    </li>{" "}
                    Se realiza con desinfectantes generalmente a base de
                    <b> hipocloritos</b>. Esta técnica es de gran utilidad en
                    lugares altamente sensibles, como por ejemplo en clínicas y
                    sanatorios, geriátricos, jardines maternales, etc. También
                    es una técnica muy útil en lugares de alta rotación de
                    público, como por ejemplo en instituciones bancarias,
                    colegios. Los trabajos
                    <span id="dots2">...</span>
                    <span id="more2">
                      {" "}
                      de limpieza habituales no alcanzan la profundidad
                      necesaria para eliminar los agentes patógenos en puntos
                      sensibles de control. Las desinfecciones que ejecuta
                      <b> SANID Desinfecciones</b> son un proceso minucioso que
                      alcanza todas las áreas de difícil acceso y en particular
                      aquéllas en las que ha tenido lugar una infestación por
                      plagas. Por ejemplo: Excrementos o cadáveres de roedores
                      en falsos techos o bajo pisos. Deposiciones o cadáveres de
                      murciélagos en taparrollos. Contaminaciones por cucarachas
                      en cocinas, baños, vestuarios.
                      <br />
                      Estas <b>contaminaciones</b> producen malos olores y son
                      un foco de infección peligroso para el hombre ya que
                      propagan virus, hongos y bacterias (ejemplo herpes
                      simplex, staphilococcus aureus, salmonella, streptococcus
                      fecalis, vibrio cholerae, etc.). <br />
                      SANID Desinfecciones cuenta con equipos especiales que
                      permiten desinfectar con eficiencia las áreas descriptas.
                      <b>
                        &nbsp;Los productos que se utilizan están basados en
                        sales de amonio cuaternario. De este modo, las
                        desinfecciones resultan inofensivas para el ser humano,
                      </b>{" "}
                      no atacan ni alteran casi ningún material y además poseen
                      un excelente poder de penetración.
                      <br /> Las desinfecciones son ventajosas en cualquier área
                      y situación y por esta razón, muchos usuarios las
                      incorporan como complemento de los trabajos de limpieza.
                      Las áreas más comúnmente requeridas para desinfectar son:
                      <li className="list__desinfectar">Baños y vestuarios.</li>
                      <li className="list__desinfectar">
                        Oficinas y comedores.
                      </li>
                      <li className="list__desinfectar">
                        Cámaras frigoríficas.
                      </li>
                      <li className="list__desinfectar">
                        Instalaciones hospitalarias y/o sanitarias.
                      </li>
                      <li className="list__desinfectar">
                        Áreas o recintos de alta concentración de personal.
                      </li>
                    </span>
                  </span>
                </p>
                <button onClick={readMore2} id="myBtn2">
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

export default Desinfeccion;
