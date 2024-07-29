import ProductCard from "../molecules/ProductCard"

const ProductList = ({ loading, error, data }) => {
  return (
    <div className="row text-center">
      {loading && (
        <div className="spinner-border text-primary" role="status"></div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          Error al cargar los productos
        </div>
      )}

      {data?.length > 0
        ? data.map((product) => (
            <ProductCard key={product.id_product} product={product} />
          ))
        : !loading &&
          !error && (
            <div className="alert alert-danger" role="alert">
              No se encontraron productos
            </div>
          )}
    </div>
  )
}

export default ProductList
