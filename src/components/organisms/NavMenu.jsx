import { useEffect } from "react"
import $ from "jquery"
import { Dropdown } from "bootstrap"

function NavMenu() {
  useEffect(() => {
    const dropdownElementList = [].slice.call(
      document.querySelectorAll(".dropdown-toggle")
    )
    dropdownElementList.map(function (dropdownToggleEl) {
      return new Dropdown(dropdownToggleEl)
    })
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand">Spring eCommerce</a>
        <form className="d-flex gap-3 form-inline my-2 my-lg-0" method="post">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            name="name"
            autoComplete="off"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Buscar
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admin
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropDownMenuLink"
              >
                <a className="dropdown-item">Products</a>
                <a className="dropdown-item">Usuarios</a>
                <a className="dropdown-item">Orders</a>
                <a className="dropdown-item">Salir</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavMenu
