import React, {Component} from 'react';
import Swal from 'sweetalert2';

class ProductoCarrito extends Component {

    confirmarEliminacion = () => {

        const {id} = this.props.productocarrito;

        Swal.fire({
            title: 'Estas seguro?',
            text: "Esta acción no se puede deshacer!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText : 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.props.borrarPedido(id)
                Swal.fire(
                    'Eliminado!',
                    'El producto ha sido eliminado.',
                    'success'
                )
            }
        })
    }

    comprarProducto = () => {
        const {id, nombre} = this.props.productocarrito;
        Swal.fire(
            `Producto ${nombre}`,
            'Su compra se realizo correctamente',
            'success'
        )
            this.props.comprarProducto(id)
    }

    render() {
        const {img, nombre, precioCamisa, cantidaCamisa} = this.props.productocarrito;
        
        return (
            <div className="col-10 col-md-8 tabla justify-content-center">
                <ul className="">
                    <li className="img-carrito">
                        <img width="50" src={img} alt={nombre}/>
                    </li>
                    <li className="">
                        <p className="text-primary m-0">{cantidaCamisa}</p>
                    </li>
                    <li className="">
                        <p className="text-primary m-0">{`${precioCamisa} $`}</p>
                    </li>
                    <li className="">
                        <div className="">
                            <button onClick={ this.comprarProducto } className="btn btn-success mr-1 mb-1">Comprar</button>
                            <button onClick={ this.confirmarEliminacion } className="btn btn-danger mb-1">Borrar &times;</button>
                        </div>
                    </li>
                </ul>
            </div> 
        )
    }
}
export default ProductoCarrito;