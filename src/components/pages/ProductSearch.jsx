import { useParams, useSearchParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Header from "../organisms/Header"

import NavMenu from "../organisms/NavMenu"
import { BASE_URL } from "../../constants/env"
import Footer from "../organisms/Footer"

const ProductSearch = () => {
  const [searchParams] = useSearchParams()
  const name = searchParams.get("name")
  //   console.log("name", searchParams.get("name"))
  const { data, loading, error } = useFetch("products/search?name=" + name)
  return (
    <>
      <NavMenu />
      <div className="container">
        <Header />
        <div className="row text-center">
          {loading && (
            <div className="spinner-border text-primary" role="status"></div>
          )}

          {error && (
            <div className="alert alert-danger" role="alert">
              Error al cargar los productos
            </div>
          )}
          {data &&
            data.length > 0 &&
            data.map((product) => (
              <div className="col-lg-3 col-md-6 mb-4" key={product.id_product}>
                <div className="card h-100">
                  <img className="card-img-top" alt="" />
                  <div className="card-body">
                    <p className="card-text">{product.name}</p>
                  </div>
                  <div className="card-footer">
                    <a
                      href={BASE_URL + "/product/" + product.id_product}
                      className="btn btn-success"
                    >
                      Ver producto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {data && data.length === 0 && (
            <div className="alert alert-danger" role="alert">
              No se encontraron productos
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductSearch
