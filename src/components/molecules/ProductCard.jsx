function ProductCard({ product }) {
    return (
        <div className="card h-100">
            <img
                className="card-img-top"
                th:src="@{/images/{img} (img=${product.getImage()})}"
                alt=""
            />
            <div className="card-body">
                <p className="card-text" th:text="${product.getName()}"></p>
            </div>
            <div className="card-footer">
                <a
                    th:href="@{/producthome/{id}  (id=${product.id_product})  }"
                    className="btn btn-success"
                >
                    Ver producto
                </a>
            </div>
        </div>
    )
}

export default ProductCard