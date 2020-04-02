import React, { Component } from "react";
import ProductoCarrito from "../ProductosCarrito/ProductoCarrito";
import "./Carrito.css";

class Carrito extends Component {
  render() {
    const productoscarrito = this.props.carrito;
    return (
      <div className="row mt-5 mb-5 pb-3">
        <div className="carrito pt-5">
          <p className="enca-carrito">
            Tu TiendaOnline donde encuentras ofertas{" "}
            <img src="./img/logo3.jpg" alt="logo" />{" "}
          </p>
          <h2>Tus Productos Por Comprar</h2>

          <div className="col-10 col-md-8 tabla justify-content-center">
            <ul className="">
              <li className="">
                <p className="titulo m-0">Producto</p>
              </li>
              <li className="">
                <p className="titulo m-0">Cantidad</p>
              </li>
              <li className="">
                <p className="titulo m-0">Precio</p>
              </li>
              <li className="">
                <p className="titulo m-0">Opciones</p>
              </li>
            </ul>
          </div>
          {Object.keys(productoscarrito).length === 0 ? (
            <div className="col-10 col-md-8 tabla">
              {" "}
              <p className="vacio text-center alert alert-danger">
                Su carrito esta vacio.{" "}
              </p>{" "}
            </div>
          ) : (
            Object.keys(productoscarrito).map(producto => (
              <ProductoCarrito
                key={producto}
                productocarrito={productoscarrito[producto]}
                borrarPedido={this.props.borrarPedido}
                comprarProducto={this.props.comprarProducto}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}
export default Carrito;
