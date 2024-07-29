import { useParams, useSearchParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Header from "../organisms/Header"

import NavMenu from "../organisms/NavMenu"
import { BASE_URL } from "../../constants/env"
import Footer from "../organisms/Footer"
import ProductList from "../organisms/ProductList"

const ProductSearch = () => {
  const [searchParams] = useSearchParams()
  const name = searchParams.get("name")
  const { data, loading, error } = useFetch("products/search?name=" + name)
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

export default ProductSearch
