import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import Productos from '../Productos/Productos';

class Inicio extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-12 justify-content-center">
                    <Logo />
                </div>
                <div className="col-12 productos">
                    <h2 className="titulo">Nuestros Productos</h2>

                    <Productos 
                        productos={this.props.productos}
                    />
                </div>

            </div>
            
        )
    }
}
export default Inicio;