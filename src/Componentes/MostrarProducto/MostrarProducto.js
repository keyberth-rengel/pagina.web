import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import uuid from 'uuid';
import Swal from 'sweetalert2';
import './MostrarProducto.css';

class MostrarProducto extends Component {

    selectRef = React.createRef();
    agregarCarrito = () => {
        const {img, nombre, precio} = this.props.producto,
             cantidaCamisa = this.selectRef.current.value,
             precioCamisa = (cantidaCamisa * precio) ;
        const producto = {
            id: uuid(),
            img,
            nombre,
            cantidaCamisa,
            precioCamisa
        }
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Se agrego correctamente al carrito',
            showConfirmButton: false,
            timer: 1500
        })
        this.props.agregarCarrito(producto);
        // console.log(precioCamisa);
    }



    render() {
        let {nombre, precio, img, detalles} = this.props.producto;
        return (

            <div className="camisas mb-5">

                <div className="camisas-img mt-3">
                    <img src={`.${img}`} className="" alt={nombre} />
                    <h3 className="nombre-camisa">{nombre} <span>{`${precio} $`}</span></h3>
                </div>

                <div className="detalles-ocultos pb-5" id="detalles-oculto">
                    <h2 className="calificacion">Calificacion </h2>
                    <p> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-alt"></i> <i className="far fa-star"></i> </p>
                    <h2>Detalles:</h2>
                    <ul className="mas-detalles">
                        {
                            detalles.map(res => (
                                <p key={res} >- {res}</p>
                            ))
                        }
                    </ul>

                    
                    <label className="my-2 cantidad" >Cantida de pedidos: </label>
                    <select ref={this.selectRef} className="col-2 col-md-1 form-control mb-3">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                    </select>
                    <button onClick={this.agregarCarrito} className="mb-2 btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        )
    }
}
export default MostrarProducto;