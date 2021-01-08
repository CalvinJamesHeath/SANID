import { Grid } from "@material-ui/core";
import React from "react";
import "./OtrosServicios.css";

function OtrosServicios() {
  return (
    <div>
      <Grid className="Otros__Servicios" container spacing={0}>
        <Grid item md={12}>
          <div className="Otros__S">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <span id="animation__blur">HIGIENE Y SEGURIDAD</span>
                </h5>
                <p className="card-text">
                  <span id="animation__blur__text">
                    <b>
                      Nos ocupamos de mejorar la salud ocupacional, la calidad
                      de vida laboral, de prevenir accidentes y enfermedades
                      profesionales, y generar un ambiente de trabajo seguro.
                    </b>{" "}
                    <br />
                    Brindamos servicios y soluciones integrales según las
                    exigencias de las normativas legales vigentes de Seguridad,
                    Higiene y Medio Ambiente. <br />
                    <hr></hr>
                    <div className="brindado">
                      <u>SERVICIOS BRINDADOS:</u>
                    </div>
                    <li className="Otros_Servicios_List">
                      Servicios de <b>higiene y seguridad</b> de acuerdo a la
                      Ley 19.587 de higiene y seguridad en el trabajo y dec.
                      351/79 y sus modificatorios 1338/96, dec. 911/96 y sus
                      modificatorios.
                    </li>
                    <li className="Otros_Servicios_List">
                      <b>Estudios ergonómicos</b> de puestos de trabajo.
                    </li>
                    <li className="Otros_Servicios_List">
                      Programas de seguridad, análisis de <b>trabajo seguro.</b>
                    </li>
                    <li className="Otros_Servicios_List">
                      Asesoramiento para cumplimiento de la Ley 24.557 de
                      <b> Riesgos del Trabajo</b> y sus decretos reglamentarios,
                      resoluciones de la <b>SRT</b> (Superintendencia de Riesgo
                      de Trabajo) 700/00,1139/04 y 463/09.
                    </li>
                    <li className="Otros_Servicios_List">
                      Asesoramiento en la resolución SRT 001/05 para{" "}
                      <b>Pymes</b> y en la implementación del P.A.P.E.(Programa
                      de Acciones de Prevención Específica).
                    </li>
                    <li className="Otros_Servicios_List">
                      Seguimiento de los <b>programas</b> de reducción de
                      siniestralidad de <b>ART.</b>
                    </li>
                    <li className="Otros_Servicios_List">
                      Confección de RAR y RGRL. Asesoramiento en la realización
                      de <b>Simulacros de Emergencias.</b>
                    </li>
                    <li className="Otros_Servicios_List">
                      Realización de <b>mediciones</b> de Iluminación, Ruido,
                      entre otras.
                    </li>
                    <li className="Otros_Servicios_List">
                      Investigación, evaluación, y confección de estadísticas de
                      <b> siniestralidad y</b> seguimiento de <b>accidentes.</b>
                    </li>
                    <li className="Otros_Servicios_List">
                      Formación y capacitación de{" "}
                      <b>Brigadas Internas de Emergencias.</b>
                    </li>
                    <li className="Otros_Servicios_List">
                      <b>Informe</b> de condiciones de higiene y seguridad,
                      medidas a adoptar.
                    </li>
                    <li className="Otros_Servicios_List">
                      Logística en ubicación de matafuegos, luces de emergencia,
                      cartelería de salida, entre otros.
                    </li>
                    <li className="Otros_Servicios_List">
                      Confección de croquis/ plano de evacuación.
                    </li>
                    <li className="Otros_Servicios_List">
                      Elaboración de informe técnico plan de evacuación y manual
                      de <b>protección contra incendios</b> para{" "}
                      <b>habilitación municipal y de bomberos</b>{" "}
                      <u>
                        (de edificios, locales comerciales, industrias y todo
                        tipo de establecimiento).
                      </u>{" "}
                    </li>
                    <hr></hr>
                    <div className="brindado">
                      <u>Confección de Manual de Autoprotección:</u>
                    </div>{" "}
                    <li>Evaluación del riesgo.</li>{" "}
                    <li>Medios de Protección.</li>
                    <li>Plan de emergencia.</li>
                    <li>Implementación.</li> <li>Carga de Fuego.</li>
                    <li> Tiempo de Evacuación.</li>{" "}
                    <li>Factor de Ocupación.</li>{" "}
                    <li>Unidad de Anchos de Salida.</li>{" "}
                    <li>Croquis de Evacuación.</li>{" "}
                    <li>Capacitación de Incendio y Roles.</li>
                    <hr></hr>
                    <div className="brindado">
                      <u> Capacitación al personal en materia de:</u>
                    </div>{" "}
                    <li>
                      Prevención y Extinción de incendios, evacuación, roles de
                      incendio, brigadas.
                    </li>{" "}
                    <li> Primeros Auxilios básicos.</li>
                    <li>Riesgos en la vía pública ( accidentes in-itinere).</li>
                    <li> Riesgos generales y específicos de la actividad.</li>
                    <li> Seguridad en Oficina.</li>
                    <li>
                      {" "}
                      Utilización y mantenimientos de elementos de protección
                      personal.
                    </li>
                    <li> Procedimientos de Trabajo Seguro.</li>
                    <li>Levantamiento manual de cargas.</li>
                    <li> Trabajo en Altura.</li>
                    <li>Otras, específicas de cada empresa.</li>
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

export default OtrosServicios;
