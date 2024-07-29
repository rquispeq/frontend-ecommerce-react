import { useEffect } from "react"
import { Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { BASE_URL } from "../../constants/env"
import { Link, useNavigate } from "react-router-dom"
import SearchProduct from "../molecules/SearchProduct"

function NavMenu() {
  const isLogged = localStorage.getItem("token") ? true : false
  const isAdmin = localStorage.getItem("type") === "admin" ? true : false
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Spring eCommerce
        </Link>
        <SearchProduct />
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
        ) : isAdmin ? (
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown id="nav-dropdown-dark-example" title="Admin">
                <Link className="dropdown-item" to="/admin/products">
                  Products
                </Link>
                <Link className="dropdown-item" to="/admin/users">
                  Users
                </Link>
                <Link className="dropdown-item" to="/admin/orders">
                  Orders
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Salir
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/user/orders" className="nav-link">
                  Compras
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Carrito
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Salir
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavMenu
