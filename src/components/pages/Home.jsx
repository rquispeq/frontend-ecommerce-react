import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import NavMenu from "../organisms/NavMenu"
import "../../static/css/heroic-features.css"
import useFetch from "../../hooks/useFetch"
import { API_URL, BASE_URL } from "../../constants/env"
import ProductCard from "../molecules/ProductCard"

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
            <ProductCard key={product.id_product} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
