import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import NavMenu from "../organisms/NavMenu"
import "../../static/css/heroic-features.css"
import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { API_URL } from "../../constants/env"

const Home = () => {
  const { data, loading, error } = useFetch("")

  if (loading) return <div>cargando</div>
  return (
    <>
      <NavMenu />
      <div className="container">
        <Header />
        <div className="row text-center">
          {data.map((product) => (
            <div className="col-lg-3 col-md-6 mb-4" key={product.id_product}>
              <div className="card h-100">
                <img className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">{product.name}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={API_URL + "/product/" + product.id_product}
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
