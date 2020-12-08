import React from "react";
import "./Inicio.css";
import Grid from "@material-ui/core/Grid";

function Inicio() {
  return (
    <React.Fragment>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <div className="somos">
              <h2 className="title">¿QUIÉNES SOMOS?</h2>
              <p>
                SANID: Es una empresa de servicios de alta tecnología y de
                capitales netamente argentinos, liderada por empresarios con una
                profunda vocación de crecimiento a partir de un desarrollo
                genuino, que es consecuencia de la capacidad y la calidad
                humanas unidas al más actualizado instrumental en función de la
                satisfacción del profesional y la tranquilidad del cliente .
                Nuestra planificación es a largo plazo. Ello explica la máxima
                responsabilidad y seriedad con que encaramos cada trabajo y los
                recursos que permanentemente dedicamos a mejorar nuestros
                servicios y a desarrollar nuevas aplicaciones. SANID
                DESINFECCIONES es una empresa Líder en el Manejo Integral de
                Plagas, con una comprobada trayectoria en la provincia de
                Córdoba y vocación de servicio. Líder: nuestra condición de
                “líderes” se sustenta en la seguridad que ofrecemos en nuestro
                servicio a partir de una cuidadosa selección del personal
                técnico, de la calidad de los productos que aplicamos, de los
                seguros contratados con empresas de notoria trayectoria y de la
                constante actualización en nuestra metodología de trabajo para
                estar siempre a la vanguardia en el servicio que ofrecemos.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="objetivos">
              <h2 className="title">NUESTROS OBJETIVOS</h2>
              <p>
                Nuestro mayor objetivo es proveer soluciones integrales a
                nuestros clientes. Ocupar una posición de liderazgo en el
                control infectológico de cada institución. Todos los productos
                utilizados en cada control de plaga, están debidamente
                autorizados y aprobados por el Ministerio de Salud. Estos
                productos de última generación son de baja toxicidad y sin
                olores desagradables en su mayoría, evitando de esta manera
                provocarles molestias innecesarias a nuestros clientes Con
                nuestro servicio, cada cliente – tanto una empresa dedicada a la
                hotelería o gastronomía como una institución de servicios
                médicos - contará con la más avanzada tecnología en normas de
                bioseguridad, solamente comparables con las establecidas en los
                países más avanzados en esterilización de sectores de alto
                riesgo.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            {" "}
            <h2>ZONAS DE TRABAJO</h2>
            <p>
              SANID DESINFECCIONES es una empresa Líder en el Manejo Integral de
              Plagas, con una comprobada trayectoria en la provincia de Córdoba
              y vocación de servicio. Tenemos sede en la provincia de Córdoba y
              contamos con autorización para ofrecer nuestro servicio tanto en
              Ciudad de Córdoba como en el interior de la provincia. Actualmente
              cubrimos gran parte del mercado de Villa Carlos Paz, Cosquín, La
              Falda, Capilla del Monte (y pueblos intermedios entre estas
              ciudades), Ciudad de Córdoba, Alta Gracia, Deán Funes y Río
              Cuarto, entre otras.
            </p>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Inicio;
