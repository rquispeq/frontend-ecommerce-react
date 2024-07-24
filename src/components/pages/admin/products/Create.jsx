import axios from "axios"
import useAuthFetch from "../../../../hooks/useAuthFetch"
import NavMenu from "../../../organisms/NavMenu"
import { API_URL } from "../../../../constants/env"
import { useEffect, useState } from "react"

const Create = () => {
  const [isCreated, setIsCreated] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", e.target.name.value)
    formData.append("description", e.target.description.value)
    formData.append("amount", e.target.amount.value)
    formData.append("price", e.target.price.value)
    formData.append("img", e.target.img.files[0])

    axios({
      method: "POST",
      url: `${API_URL}/products/store`,
      data: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }).then((resp) => {
      setIsCreated(true)
      e.target.reset()
    })
  }

  return (
    <>
      <NavMenu />
      <div className="container">
        <div className="container">
          <h1 className="mt-4 mb-3">
            Spring eCommerce <small>Productos</small>
          </h1>

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Crear Productos</li>
          </ol>

          <h2>Crear Producto</h2>
          {isCreated && (
            <div className="alert alert-success">
              Producto creado correctamente
            </div>
          )}
          <form
            className="form-horizontal"
            encType="multipart/form-data"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="nombre">
                Nombre:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="name"
                  placeholder="Ingrese el nombre del producto"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="descripcion">
                Descripción:
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="descripcion"
                  name="description"
                  placeholder="Ingrese la descripcion del producto"
                  required
                  autoComplete="off"
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="cantidad">
                Cantidad:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="cantidad"
                  name="amount"
                  placeholder="Ingrese la cantidad del producto"
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="precio">
                Precio:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  step="any"
                  id="precio"
                  name="price"
                  placeholder="Ingrese el precio del producto"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="img">
                Imagen:
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  className="form-control-file"
                  id="img"
                  name="img"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2">
                <button type="submit" className="btn btn-success">
                  <span className="glyphicon glyphicon-saved"></span> Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create
