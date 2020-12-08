import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";

function Footer() {
  return (
    <React.Fragment>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <h3>
              <strong>Nuestra Ubicación</strong>
            </h3>

            <div id="wrapper">
              <iframe
                title="map"
                width="100%"
                height="468"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                // zIndex="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Sanid%20SA+(Sanid)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <h3>
              <strong>Contáctanos!</strong>
            </h3>
            <div>
              <form action="/action_page.php">
                <label>Nombre</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Tu nombre..."
                />
                <label>Apellido</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Tu apellido..."
                />

                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu email..."
                />

                <label>Mensaje</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Escribe algo..."
                ></textarea>
                <div id="center">
                  <input type="submit" value="Enviar" />
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Footer;
