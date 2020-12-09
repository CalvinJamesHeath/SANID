import React, { Component } from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const API_PATH =
  "http://localhost:1992/react-contact-form/api/contact/index.php";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

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
                <form action="/action_page.php">
                  <label>Nombre</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Tu nombre..."
                    value={this.state.fname}
                    onChange={(e) => this.setState({ fname: e.target.value })}
                  />
                  <label>Apellido</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Tu apellido..."
                    value={this.state.lname}
                    onChange={(e) => this.setState({ lname: e.target.value })}
                  />

                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu email..."
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />

                  <label>Mensaje</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Escribe algo..."
                    onChange={(e) => this.setState({ message: e.target.value })}
                    value={this.state.message}
                  ></textarea>
                  <div id="center">
                    <input
                      type="submit"
                      value="Enviar"
                      onClick={(e) => this.handleFormSubmit(e)}
                    />
                  </div>
                  <div>
                    {this.state.mailSent && (
                      <div>Gracias por Contactarte con Nosotros</div>
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
