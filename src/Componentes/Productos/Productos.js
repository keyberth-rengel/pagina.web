import React, {Component} from 'react';
import Producto from '../Producto/Producto';

class Productos extends Component {
    render() {
        const productos = this.props.productos;
        return(
            
            <div className="col-12 contenedor-camisas">
                {Object.keys(productos.productos).map((producto) => (
                    <Producto 
                        key={producto}
                        producto={productos.productos[producto]}
                    />
                ))}
            
            </div>
            
        )
    }
}
export default Productos;