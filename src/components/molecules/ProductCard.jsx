import { BASE_URL } from "../../constants/env"

function ProductCard({ product }) {
  return (
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
  )
}

export default ProductCard
