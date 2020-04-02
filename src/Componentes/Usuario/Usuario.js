import React, { Component } from "react";
import "./Usuario.css";

class Usuario extends Component {
  state = {
    error: false
  };

  // emailRef = React.createRef();
  // passRef = React.createRef();

  ingresar = e => {
    e.preventDefault();
    // const email = this.emailRef.current.value,
    //       pass = this.passRef.current.value;
    // if(email === "" || pass === "" ) {
    this.setState({
      error: true
    });
    // }

    setTimeout(() => {
      this.setState({
        error: false
      });
    }, 4000);
  };

  render() {
    const error = this.state.error;

    const fallo = error ? (
      <div className="btn btn-danger my-2 py-3 text-white text-center">
        Usuario o Contraseña incorrectos. Intente nuevamente.
      </div>
    ) : (
      ""
    );

    return (
      <div
        className="iniciar-sesion my-4 col-ms-12 col-md-8 col-lg-8"
        id="iniciar"
      >
        <p className="enca1-form">Iniciar Seccion</p>
        <form
          className="pb-5 formulario"
          onSubmit={this.ingresar}
          id="iniciar-form"
          name="iniciar-form"
        >
          <input
            type="email"
            ref={this.emailRef}
            className="texto-formulario"
            name="correo"
            id="correo-iniciar"
            placeholder="Correo electronico"
          />

          <input
            type="password"
            ref={this.passRef}
            className="texto-formulario"
            name="password"
            id="password-iniciar"
            placeholder="Contraseña"
          />
          {fallo}
          <input type="submit" name="boton" value="Iniciar" id="btn-iniciar" />
        </form>
      </div>
    );
  }
}
export default Usuario;
