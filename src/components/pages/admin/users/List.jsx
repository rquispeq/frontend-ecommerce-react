import useAuthFetch from "../../../../hooks/useAuthFetch"
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

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="@{/}">Home</a>
          </li>
          <li className="breadcrumb-item active">Ver Usuarios</li>
        </ol>
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
    </>
  )
}

export default List
