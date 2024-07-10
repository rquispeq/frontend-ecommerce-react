import { API_URL } from "../../../../constants/env"
import useFetch from "../../../../hooks/useFetch"
import Footer from "../../../organisms/Footer"
import NavMenu from "../../../organisms/NavMenu"

const List = () => {
  const { data, loading, error } = useFetch("products")
  if (loading) return <div>cargando</div>
  return (
    <>
      <NavMenu />
      <div className="container">
        <div className="row text-center">
          <div className="container">
            <h1 className="mt-4 mb-3">
              Spring eCommerce <small>Productos</small>
            </h1>

            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Ver Productos</li>
            </ol>

            <a className="btn btn-primary" href={API_URL + "product/create"}>
              {" "}
              Crear Producto
            </a>
            <h2>Productos</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Inventario</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acción</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id_product}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.amount}</td>
                    <td>{product.price}</td>
                    <td>
                      <a
                        className="btn btn-warning"
                        href={API_URL + "/product/edit/" + product.id_product}
                      >
                        Editar
                      </a>{" "}
                    </td>
                    <td>
                      <a
                        className="btn btn-danger"
                        href={API_URL + "/product/delete/" + product.id_product}
                      >
                        Eliminar
                      </a>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default List
