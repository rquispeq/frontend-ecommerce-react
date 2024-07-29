import { useParams } from "react-router-dom"
import useAuthFetch from "../../../../hooks/useAuthFetch"
import Footer from "../../../organisms/Footer"
import NavMenu from "../../../organisms/NavMenu"
import BreadCrumb from "../../../molecules/Breadcrumb"

const DetailOrder = () => {
  const params = useParams()
  const {
    data: detailOrder,
    loading,
    error,
  } = useAuthFetch("user/detail/" + params.id)
  return (
    <>
      <NavMenu />
      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Detalles</small>
        </h1>

        <BreadCrumb
          items={[
            { label: "Compras", href: "/admin/orders" },
            { label: "Detalle de Compra", active: true },
          ]}
        />

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
                    {detailOrder?.map((detail) => {
                      return (
                        <tr key={detailOrder.id}>
                          <td>{detail.amount}</td>
                          <td>{detail.name}</td>
                          <td>{detail.price}</td>
                          <td>{detail.total}</td>
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
export default DetailOrder
