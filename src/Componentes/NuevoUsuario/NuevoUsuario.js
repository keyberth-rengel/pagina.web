import React, { Component } from "react";
import "./NuevoUsuario.css";

class NuevoUsuario extends Component {
  state = {
    error: false,
    env: false
  };

  nombreRef = React.createRef();
  emailRef = React.createRef();
  passRef = React.createRef();
  pass2Ref = React.createRef();

  registrar = e => {
    e.preventDefault();
    const nombre = this.nombreRef.current.value,
      email = this.emailRef.current.value,
      pass = this.passRef.current.value,
      pass2 = this.pass2Ref.current.value;
    if (nombre === "" || email === "" || pass === "" || pass2 === "") {
      this.setState({
        error: true
      });
    } else {
      e.currentTarget.reset();
      this.setState({
        env: true
      });
    }

    setTimeout(() => {
      this.setState({
        error: false,
        env: false
      });
    }, 4000);
  };

  render() {
    const error = this.state.error;
    const env = this.state.env;

    const fallo = error ? (
      <div className="btn btn-danger my-2 py-3 text-white text-center">
        Todos los campos son obligatorios
      </div>
    ) : (
      ""
    );
    const enviado = env ? (
      <div className="btn btn-success my-2 py-3 text-white text-center">
        Usuario creado exitosamente...
      </div>
    ) : (
      ""
    );
    let mensaje;
    if (fallo !== "") {
      mensaje = fallo;
    } else if (enviado !== "") {
      mensaje = enviado;
    }

    return (
      <div className="my-5 pb-5 registrar-usuario col-md-8 col-ms-12 col-ml-8 align-items-center">
        <p className="enca-form">
          Registrate y Forma Parte de Nuestra TiendaOnline{" "}
          <img src="./img/logo3.jpg" alt="logo" />{" "}
        </p>
        <h2>Ingresa Tus Datos</h2>
        <form
          className="formulario"
          id="formulario"
          onSubmit={this.registrar}
          name="formulario"
        >
          <input
            type="text"
            className="texto-formulario"
            ref={this.nombreRef}
            name="nombre"
            id="nombre-registrar"
            placeholder="Nombre"
          />

          <input
            type="email"
            className="texto-formulario"
            ref={this.emailRef}
            name="correo"
            id="correo-registrar"
            placeholder="Correo electronico"
          />

          <input
            type="password"
            className="texto-formulario"
            ref={this.passRef}
            name="password"
            id="password-registrar"
            placeholder="Contraseña"
          />
          <input
            type="password"
            className="texto-formulario"
            ref={this.pass2Ref}
            name="confirmar_password"
            id="password1-registrar"
            placeholder="Confirmar Contraseña"
          />

          <div className="terminos">
            <input type="checkbox" name="terminos" id="terminos-registrar" />
            <label>Acepte los terminos y condiciones</label>
          </div>
          {mensaje}
          <input type="submit" value="Registar" />
        </form>
      </div>
    );
  }
}
export default NuevoUsuario;
