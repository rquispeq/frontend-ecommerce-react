import { BASE_URL } from "../../constants/env"

const SearchProduct = () => {
  return (
    <form
      className="d-flex gap-3 form-inline my-2 my-lg-0"
      method="get"
      action={BASE_URL + "/products/search"}
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        name="name"
        autoComplete="off"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Buscar
      </button>
    </form>
  )
}

export default SearchProduct
