import { useParams } from "react-router-dom"
import NavMenu from "../../../organisms/NavMenu"
import Footer from "../../../organisms/Footer"
import useAuthFetch from "../../../../hooks/useAuthFetch"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../../../constants/env"

const Edit = () => {
  const params = useParams()
  const {
    data: product,
    loading,
    error,
  } = useAuthFetch("products/edit/" + params.id)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: "",
    price: "",
    img: null,
  })

  useEffect(() => {
    if (product) {
      setFormData({
        id_product: product.id_product,
        name: product.name,
        description: product.description,
        amount: product.amount,
        price: product.price,
        img: product.img,
      })
    }
  }, [product])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
    const updateData = new FormData()
    updateData.append("id_product", formData.id_product)
    updateData.append("name", formData.name)
    updateData.append("description", formData.description)
    updateData.append("amount", formData.amount)
    updateData.append("price", formData.price)
    updateData.append("img", formData.img)
    axios({
      method: "PUT",
      url: `${API_URL}/products/update/` + product.id_product,
      data: updateData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    })
  }
  return (
    <>
      <NavMenu />
      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Productos</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Actualizar Producto</li>
        </ol>

        <h2>Actualizar Producto</h2>
        {loading && <div className="alert alert-info">Cargando</div>}
        {error && (
          <div className="alert alert-danger">
            Error al cargar los productos
          </div>
        )}
        {product && (
          <form
            className="form-horizontal"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input type="hidden" name="id_product" value={product.id_product} />

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="name">
                Nombre:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Ingrese el nombre del producto"
                  required
                  autoComplete="off"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  value={formData.name}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="description">
                Descripción:
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Ingrese la descripcion del producto"
                  required
                  autoComplete="off"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  value={formData.description}
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="amount">
                Cantidad:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  placeholder="Ingrese la cantidad del producto"
                  required
                  autoComplete="off"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      amount: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="price">
                Precio:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  step="any"
                  id="price"
                  name="price"
                  placeholder="Ingrese el precio del producto"
                  required
                  autoComplete="off"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="image">
                Imagen:
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  className="form-control-file"
                  id="img"
                  name="img"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      img: e.target.files[0],
                    })
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2">
                <button type="submit" className="btn btn-success">
                  {" "}
                  Guardar
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  )
}
export default Edit
