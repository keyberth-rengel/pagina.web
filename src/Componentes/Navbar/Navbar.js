import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
		buscador = (e) => {
			e.preventDefault();
		}
	render() {
		return (
			<div className="row pt-2">
				<nav className="encabezado navbar navbar-toggleable-md navbar-light">
					<div className="container">
						<button className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#fm-menu" aria-controls="fm-menu" aria-expanded="false" aria-label="Menu">
						<span className="navbar-toggler-icon"></span>
						</button>
						<img src="img/logo3.jpg" alt="logo" width="50px"/>

						<div className="collapse navbar-collapse" id="fm-menu">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link to="/" className="nav-link"><strong>Inicio</strong></Link>
								</li>
								<li className="nav-item">
									
								<Link to="/carrito" className="nav-link"><strong>Mi carrito</strong></Link>
								</li>
								<li className="nav-item">
									<Link to="/nuevo-usuario" className="nav-link"><strong>Registrate</strong></Link>
								</li>
							</ul>

							<form  className="mt-1 mr-2 form-inline justify-content-center d-flex" onClick={this.buscador}>
								<input type="text" className="form-control mr-2 mb-2" placeholder="Buscar" />
								<button type="submit" className="mb-2 btn btn-primary">Buscar</button>
							</form>
							<ul className="navbar-nav ">
								<li className="nav-item">
									<Link to="/iniciar-sesion" className="nav-link"><strong>Iniciar Sesion</strong></Link>
								</li>
							</ul>


						</div>
					</div>
				</nav>
			</div>
		)
	}
}
export default Navbar;