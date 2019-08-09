import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Data from '../data/data.json';
import Navbar from './Navbar/Navbar';
import Inicio from './Inicio/Inicio';
import NuevoUsuario from './NuevoUsuario/NuevoUsuario';
import Usuario from './Usuario/Usuario';
import MostrarProducto from './MostrarProducto/MostrarProducto';
import Carrito from './Carrito/Carrito';
import Footer from './Footer/Footer';

class Router extends Component {

    state = {
        productos: [],
        carrito: []
    }

    componentWillMount () {

        this.setState({
            productos: Data
        })
    }
    agregarCarrito = (producto) => {

        const carrito = [...this.state.carrito, producto];
        this.setState({
            carrito
        });
        
    }
    componentDidMount() {
        const carritoLS = localStorage.getItem("ProductosCarrito");
        if(carritoLS){
            
            this.setState({
                carrito: JSON.parse(carritoLS)
            });
        }
    }
    componentDidUpdate() {
        localStorage.setItem(
            "ProductosCarrito",
            JSON.stringify(this.state.carrito)
        )
    }
    borrarPedido = (id) => {
        const anteriorCarrito = [...this.state.carrito];
        const nuevoCarrito = anteriorCarrito.filter( producto => producto.id !== id );
        
        this.setState({
            carrito: nuevoCarrito
        });
    }
    comprarProducto = (id) => {
        const anteriorCarrito = [...this.state.carrito];
        const nuevoCarrito = anteriorCarrito.filter( producto => producto.id !== id );
        
        this.setState({
            carrito: nuevoCarrito
        });
    }

    render() {
        return (
            <BrowserRouter>
            
                <div className="container" id="container">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" render = { () => ( <Inicio productos={this.state.productos} /> ) } />
                        <Route exact path="/nuevo-usuario" render={ () => ( <NuevoUsuario /> ) } />
                        <Route exact path="/iniciar-sesion" render={ () => ( <Usuario /> ) } />
                        <Route exact path={"/producto/:nombre"} render = { (props) => {
                        
                            let pro = props.location.pathname.replace('/producto/', '');
                            let producto = this.state.productos.productos.find( res => (res.nombre === pro) );
                            return (
                                <MostrarProducto 
                                    key={producto.img}
                                    producto={producto}
                                    agregarCarrito={this.agregarCarrito}
                                />
                            )
                        
                        } } />
                        <Route exact path="/carrito" render= { () => ( <Carrito
                            comprarProducto={this.comprarProducto} 
                            carrito={this.state.carrito}
                            borrarPedido={this.borrarPedido}
                        /> ) } />
                    </Switch>
                </div>
                <Footer />
            
            </BrowserRouter>
        )
    }
}
export default Router;