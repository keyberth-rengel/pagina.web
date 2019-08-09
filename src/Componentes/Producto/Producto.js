import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Producto.css';

class Producto extends Component {

    scroll = () => {
        const scroll = document.getElementById("container");
        scroll.scrollIntoView('auto', 'start');
    }
    render() {
        const {img, nombre, precio} = this.props.producto;
        return(

            <div className="col-12 col-md-6 col-lg-4 justify-content-center camisa d-flex">
                <div className="col-12 camisa-img">
                    <img src={img} className="" alt={nombre} />
                    <h3 className="nombre-camisa">{nombre} <span>{`${precio} $`}</span></h3>
                    <Link to={`/producto/${nombre}`} onClick={this.scroll} className="detalle-camisa">Ver detalles</Link>
                </div>
            </div>
        )
    }
}
export default Producto;