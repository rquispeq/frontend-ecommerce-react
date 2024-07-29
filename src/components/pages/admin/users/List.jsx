import useAuthFetch from "../../../../hooks/useAuthFetch"
import BreadCrumb from "../../../molecules/Breadcrumb"
import Footer from "../../../organisms/Footer"
import NavMenu from "../../../organisms/NavMenu"

const List = () => {
  const { data: users, loading, error } = useAuthFetch("admin/users")
  return (
    <>
      <NavMenu />
      <div className="container">
        <h1 className="mt-4 mb-3">
          Spring eCommerce <small>Usuarios</small>
        </h1>

        <BreadCrumb items={[{ label: "Ver Usuarios", active: true }]} />
        <h2>Usuarios</h2>
        {loading && <div className="alert alert-info">Cargando</div>}
        {error && (
          <div className="alert alert-danger">Error al cargar los usuarios</div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Dirección</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}

export default List
