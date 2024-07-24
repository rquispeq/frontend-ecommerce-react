import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import NavMenu from "../organisms/NavMenu"
import "../../static/css/heroic-features.css"
import useFetch from "../../hooks/useFetch"
import { API_URL, BASE_URL } from "../../constants/env"

const Home = () => {
  const { data, loading, error } = useFetch("products")

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
          {data?.map((product) => (
            <div className="col-lg-3 col-md-6 mb-4" key={product.id_product}>
              <div className="card h-100">
                <img className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">{product.name}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={BASE_URL + "/products/" + product.id_product}
                    className="btn btn-success"
                  >
                    Ver producto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
