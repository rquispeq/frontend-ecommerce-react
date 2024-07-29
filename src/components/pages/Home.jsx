import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import NavMenu from "../organisms/NavMenu"
import "../../static/css/heroic-features.css"
import useFetch from "../../hooks/useFetch"
import { API_URL, BASE_URL } from "../../constants/env"
import ProductCard from "../molecules/ProductCard"
import ProductList from "../organisms/ProductList"

const Home = () => {
  const { data, loading, error } = useFetch("products")

  return (
    <>
      <NavMenu />
      <div className="container">
        <Header />
        <div className="row text-center">
          <ProductList loading={loading} error={error} data={data} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
