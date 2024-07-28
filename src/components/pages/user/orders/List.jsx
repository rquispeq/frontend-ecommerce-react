import { Link } from "react-router-dom"
import Footer from "../../../organisms/Footer"
import NavMenu from "../../../organisms/NavMenu"
import useAuthFetch from "../../../../hooks/useAuthFetch"

const List = () => {
  const { data: orders, loading, error } = useAuthFetch("user/shop")
  return (
    <>
      <NavMenu />

      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Compras</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="@{/}">Home</a>
          </li>
          <li className="breadcrumb-item active">Compras</li>
        </ol>

        {loading && <div className="alert alert-info">Cargando</div>}
        {error && (
          <div className="alert alert-danger">Error al cargar las compras</div>
        )}

        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">No. de Orden</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Valor</th>
                      <th scope="col">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.map((order) => {
                      const date = new Date(order.created_date)
                      const day = String(date.getDate()).padStart(2, "0")
                      const month = String(date.getMonth() + 1).padStart(2, "0") // Los meses en JavaScript son de 0 a 11
                      const year = date.getFullYear()
                      const formattedDate = `${day}/${month}/${year}`
                      return (
                        <tr key={order.id_order}>
                          <td>{order.number}</td>
                          <td>{formattedDate}</td>
                          <td>{order.total}</td>
                          <td>
                            <Link href="" className="btn btn-success">
                              Ver Detalle
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
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
