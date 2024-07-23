import { Link, redirect, useNavigate } from "react-router-dom"
import { API_URL } from "../../../../constants/env"
import useFetch from "../../../../hooks/useFetch"
import Footer from "../../../organisms/Footer"
import NavMenu from "../../../organisms/NavMenu"
import axios from "axios"

const List = () => {
  const { data, loading, error } = useFetch("products")
  const navigate = useNavigate()

  const handleDelete = (id_product) => {
    axios({
      method: "DELETE",
      url: `${API_URL}/products/delete/` + id_product,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).finally(() => {
      console.log("deleted")
      window.location.reload()
    })
  }
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
            {loading && <div className="alert alert-info">Cargando</div>}
            {error && (
              <div className="alert alert-danger">
                Error al cargar los productos
              </div>
            )}
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
                {data?.map((product) => (
                  <tr key={product.id_product}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.amount}</td>
                    <td>{product.price}</td>
                    <td>
                      <Link
                        className="btn btn-warning"
                        to={"/product/edit/" + product.id_product}
                      >
                        Editar
                      </Link>{" "}
                    </td>
                    <td>
                      <a
                        className="btn btn-danger"
                        onClick={() => handleDelete(product.id_product)}
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
