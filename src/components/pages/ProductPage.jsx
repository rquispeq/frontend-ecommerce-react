import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import NavMenu from "../organisms/NavMenu"
import { useEffect, useState } from "react"
import Footer from "../organisms/Footer"

const ProductPage = (props) => {
  const [amount, setAmount] = useState(1)

  const params = useParams()
  const {
    data: product,
    loading,
    error,
  } = useFetch("products/show/" + params.id)
  if (loading) return <div>cargando</div>

  return (
    <>
      <NavMenu />
      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Producto</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="@{/}">Home</a>
          </li>
          <li className="breadcrumb-item active">Producto</li>
        </ol>

        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <a href="#">
                  {" "}
                  <img
                    className="img-fluid rounded"
                    src="@{/images/{img} (img=${product.image})  }"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-6">
                <form action="@{/cart}" method="POST">
                  <input
                    type="hidden"
                    value={product.id_product}
                    name="idProduct"
                  />
                  <h2 className="card-title">{product.name}</h2>

                  <ul className="list-group">
                    <li className="list-group-item">
                      <h5>Precio: {product.price}</h5>
                    </li>
                    <li className="list-group-item">
                      <p>Descripción: {product.description}</p>
                    </li>
                    <li className="list-group-item">
                      <h6>
                        Cantidad:{" "}
                        <input
                          type="number"
                          id="cantidad"
                          name="amount"
                          autoComplete="off"
                          min="1"
                          max="5"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </h6>
                    </li>
                  </ul>

                  <button type="submit" className="btn btn-dark">
                    Añadir al carrito
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductPage
