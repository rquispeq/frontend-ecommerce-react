import { Link } from "react-router-dom"
import NavMenu from "../../../organisms/NavMenu"
import useAuthFetch from "../../../../hooks/useAuthFetch"

const List = () => {
  const { data: orders, loading, error } = useAuthFetch("admin/orders")
  return (
    <>
      <NavMenu />
      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Ordenes</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Ordenes</li>
        </ol>
        {loading && <div className="alert alert-info">Cargando</div>}
        {error && (
          <div className="alert alert-danger">Error al cargar las ordenes</div>
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
                      ;<tr>
                        <td>{order.number}</td>
                        <td>{order.created_date}</td>
                        <td>{order.total}</td>
                        <td>
                          <Link
                            to={"/admin/details/}" + order.id_order}
                            className="btn btn-success"
                          >
                            Ver Detalle
                          </Link>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default List
