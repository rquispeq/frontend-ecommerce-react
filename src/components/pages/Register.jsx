import axios from "axios"
import NavMenu from "../organisms/NavMenu"
import { API_URL } from "../../constants/env"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const address = e.target.address.value
    const password = e.target.password.value
    const data = { name, email, address, password }
    axios.post(`${API_URL}/auth/signup`, data).then((resp) => {
      navigate("/login?register=true")
    })
  }
  return (
    <>
      <NavMenu />
      <div className="container">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="card-body">
                <h2>Registro</h2>
              </div>
            </div>
          </div>
        </div>
        <form method="post" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="nombres">Nombres:</label>{" "}
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="name"
              required
              placeholder="Ingrese sus nombres"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>{" "}
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              placeholder="Ingrese su email"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Dirección:</label>{" "}
            <input
              type="text"
              className="form-control"
              id="direccion"
              name="address"
              required
              placeholder="Ingrese su dirección"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Contraseña</label>{" "}
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              placeholder="Ingrese su contraseña"
              autoComplete="off"
            />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
