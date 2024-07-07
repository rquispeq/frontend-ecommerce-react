import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import NavMenu from "../organisms/NavMenu"
// import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css"
import "../../static/css/heroic-features.css"
import "bootstrap/dist/js/bootstrap.bundle"

// $(document).ready(function () {
//     console.log('jQuery is ready')
//   })

function Home() {
  return (
    <>
      <NavMenu />
      <div className="container">
        <Header />
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">titulo producto</p>
              </div>
              <div className="card-footer">
                <a className="btn btn-success">Ver producto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
