import { useEffect } from "react"
import { Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { BASE_URL } from "../../constants/env"
import { Link } from "react-router-dom"

function NavMenu() {
  const isLogged = localStorage.getItem("token") ? true : false
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand">Spring eCommerce</a>
        <form
          className="d-flex gap-3 form-inline my-2 my-lg-0"
          method="get"
          action={BASE_URL + "/product/search"}
        >
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
        {!isLogged ? (
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown id="nav-dropdown-dark-example" title="Admin">
                <NavDropdown.Item href="admin/products">
                  Products
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Users</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Salir</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </div>
    </nav>
  )
}

export default NavMenu
