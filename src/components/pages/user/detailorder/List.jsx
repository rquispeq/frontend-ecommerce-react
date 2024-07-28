import { useParams } from "react-router-dom"
import useAuthFetch from "../../../../hooks/useAuthFetch"
import Footer from "../../../organisms/Footer"
import NavMenu from "../../../organisms/NavMenu"

const List = () => {
  const params = useParams()
  const idDetailOrder = params.id

  const {
    data: detailOrder,
    loading,
    error,
  } = useAuthFetch("user/detail/" + idDetailOrder)
  return (
    <>
      <NavMenu />
      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Detalles</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="compras.html">Compras</a>
          </li>
          <li className="breadcrumb-item active">Detalle de Compra</li>
        </ol>

        {loading && <div className="alert alert-info">Cargando</div>}

        {error && (
          <div className="alert alert-danger">Error al cargar los detalles</div>
        )}

        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Producto</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailOrder?.map((detail) => (
                      <tr key={detailOrder.id}>
                        <td>{detail.amount}</td>
                        <td>{detail.name}</td>
                        <td>{detail.price}</td>
                        <td>{detail.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default List
