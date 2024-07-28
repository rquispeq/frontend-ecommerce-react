import axios from "axios"
import NavMenu from "../../organisms/NavMenu"
import { API_URL } from "../../../constants/env"
import { useNavigate } from "react-router-dom"

const Order = () => {
  const navigate = useNavigate()
  const user = {
    name: "User Name",
    email: " [email protected]",
    address: "User Address",
  }
  const cart = JSON.parse(localStorage.getItem("cart"))
  let order = { total: 0 }

  const handleSaveOrder = () => {
    axios
      .post(`${API_URL}/user/saveorder`, cart, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((resp) => {
        localStorage.setItem("cart", JSON.stringify([]))
        navigate("/orders")
      })
  }
  return (
    <>
      <NavMenu />
      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Resumen de la orden</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="@{/}">Home</a>
          </li>
          <li className="breadcrumb-item active">Orden</li>
        </ol>

        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-9">
                <div className="card-body">
                  <h5 className="card-title">DATOS ORDEN</h5>
                  <h6>{user?.name} </h6>
                  <h6>{user?.email}</h6>
                  <h6>{user?.address}</h6>

                  <h5 className="card-title">PRODUCTOS</h5>
                  <div className="alert alert-light" role="alert">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Producto</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((productCart) => {
                          order.total += parseFloat(
                            productCart.amount * productCart.price
                          )
                          return (
                            <tr key={productCart.id_product}>
                              <td>{productCart.name}</td>
                              <td>{productCart.price}</td>
                              <td>{productCart.amount}</td>
                              <td>{productCart.price * productCart.amount}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <h2 className="card-title">Resumen Orden</h2>

                <ul className="list-group">
                  <li className="list-group-item">
                    <h5>Total: {order.total}</h5>
                  </li>
                  <a onClick={handleSaveOrder} className="btn btn-dark">
                    Generar
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order
