import { Grid } from "@material-ui/core";
import React from "react";
import "./Asepcia.css";

function Asepcia() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid className="lightgray" item sm={12}>
          <div className="asepcia__contenedor">
            <div className="card">
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                <h5 className="card-title">
                  <span id="animation__blur">ASEPSIA</span>
                </h5>
                <p className="card-text">
                  <span id="animation__blur__text">
                    El prefijo <b>"a"</b> significa negación, falta o ausencia;
                    y<b> "sepsis"</b> infección o contaminación; por lo tanto el
                    término
                    <b> asepsia se define como</b> la ausencia de materia
                    séptica, es decir <b>la falta absoluta de gérmenes</b>.{" "}
                    <br />
                    <b className="li__asepciaQ">Asepsia Quirúrgica: </b>
                    desde el punto de vista quirúrgico se puede definir a la
                    asepsia como el conjunto de maniobras o procedimientos que
                    tienden a evitar la contaminación de una herida, del
                    instrumental, o del campo quirúrgico. <br />
                    <u>Maniobras para intentar una cirugía Aséptica:</u>
                    <li className="list__desinfectar__asepcia">
                      Esterilización.
                    </li>
                    <li className="list__desinfectar__asepcia">
                      Asepsia o Desinfección Esterilización.
                    </li>{" "}
                    {/* <br /> */}
                    Desinfección Esterilización es el conjunto de procedimientos
                    que{" "}
                    <b>
                      destruyen los gérmenes, impiden su desarrollo y evitan la
                      contaminación
                    </b>
                    ; este término se aplica en general a los objetos fácilmente
                    manipulables Asepsia El prefijo "a", significa contra, y
                    podemos definirla como el conjunto de procedimientos que
                    tienen como objetivo destruir o eliminar los agentes
                    contaminantes de todo aquello que no pueda ser esterilizado.
                    Lo mismo podríamos utilizar para definir desinfección por
                    eso es que se usan en muchos casos para indicar lo mismo,
                    presentando a veces confusiones como que son maniobras
                    distintas.
                    <br /> <b>Sanid desinfecciones</b> tiene una amplia
                    trayectoria brindando servicios de asepsia en instituciones
                    sanitarias de la provincia de Córdoba, preparando – entre
                    otras cosas- la correcta condición de los quirófanos antes
                    de una cirugía.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Asepcia;
