import { useEffect, useState } from "react"
import Footer from "../organisms/Footer"
import NavMenu from "../organisms/NavMenu"
import { Link } from "react-router-dom"

const Cart = () => {
  const [cart, setCart] = useState([])
  let order = { total: 0 }
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")))
  }, [])
  return (
    <>
      <NavMenu />
      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Carrito</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a>Home</a>
          </li>
          <li className="breadcrumb-item active">Carrito</li>
        </ol>
        {cart.length === 0 && (
          <div className="alert alert-info">Carrito vacío</div>
        )}
        {cart.length > 0 && (
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-9">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((cartOrder) => {
                        order.total += parseFloat(
                          cartOrder.amount * cartOrder.price
                        )
                        return (
                          <tr key={cartOrder.id_product}>
                            <td>{cartOrder.name}</td>
                            <td>{cartOrder.price}</td>
                            <td>{cartOrder.amount}</td>
                            <td>{cartOrder.amount * cartOrder.price}</td>
                            <td>
                              <a className="btn btn-danger">Eliminar</a>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="col-lg-3">
                  <h2 className="card-title">SUBTOTAL</h2>

                  <ul className="list-group">
                    <li>
                      <h5>{order.total}</h5>
                    </li>
                    <Link to="/order" className="btn btn-dark">
                      Ver Orden
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Cart
