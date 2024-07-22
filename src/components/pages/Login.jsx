import axios from "axios"
import NavMenu from "../organisms/NavMenu"
import { Navigate, redirect, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { API_URL } from "../../constants/env"

const Login = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    axios
      .post(`${API_URL}/auth/login`, { email, password })
      .then((resp) => {
        localStorage.setItem("token", resp.data.token)
        navigate("/")
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
        redirect("/")
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
                <h2>Ingresar</h2>
                {error && (
                  <p style="color:red;">Invalid username or password.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleLogin} method="post">
          <div className="form-group">
            <label htmlFor="email"> Email: </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Ingrese su email"
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pwd"> Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <div className="form-group">
            <div className="col-sm-2">
              <button type="submit" className="btn btn-dark">
                {" "}
                <span className="glyphicon glyphicon-ok"></span> Ingresar
              </button>
            </div>
          </div>
        </form>
        <a href="@{/user/register}" className="card-link">
          Si aún no tiene cuenta aqui puede registrarse
        </a>
      </div>
    </>
  )
}

export default Login
