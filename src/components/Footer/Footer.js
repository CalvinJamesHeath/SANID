import React, { Component } from "react";

import emailjs from "emailjs-com";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lqyn1ff",
        "template_x38kd83",
        e.target,
        "user_mofgR4iD6Q9s4rIboog5Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    this.setState({
      mailSent: true,
    });
  };
  componentDidUpdate() {
    if (this.state.mailSent) {
      // when the state is updated (SUMBITED),
      // a timeout is triggered to switch it back off
      this.Reset = setTimeout(() => {
        this.setState(() => ({ mailSent: false }));
      }, 5000);
    }
  }
  componentWillUnmount() {
    // we set the timeout to this.Reset so that we can
    // clean it up when the component is unmounted.
    // otherwise you could get your app trying to modify the state on an
    // unmounted component, which will throw an error
    clearTimeout(this.Reset);
  }

  render() {
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
                <form onSubmit={this.handleFormSubmit}>
                  <label>Nombre</label>

                  <input
                    type="text"
                    placeholder="Tu nombre..."
                    name="name"
                    required
                  />
                  <label>Apellido</label>
                  <input
                    required
                    type="text"
                    name="lastname"
                    placeholder="Tu apellido..."
                  />

                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Tu email..."
                    required
                  />

                  <label>Mensaje</label>
                  <textarea
                    name="message"
                    placeholder="Escribe algo..."
                    required
                  ></textarea>

                  <div id="center">
                    <input
                      type="submit"
                      value="Enviar"
                      onSubmit={(e) => this.handleFormSubmit(e)}
                    />
                  </div>
                  <div>
                    {this.state.mailSent && (
                      <div>
                        <p className="sent"> Su consulta a sido Enviada!</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
