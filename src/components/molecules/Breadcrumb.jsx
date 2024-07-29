import { Link } from "react-router-dom"

const BreadCrumb = ({ items }) => {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      {items.map((item, index) => (
        <li
          key={index}
          className={`breadcrumb-item ${item.active ? "active" : ""}`}
        >
          {item.active ? item.label : <Link to={item.href}>{item.label}</Link>}
        </li>
      ))}
    </ol>
  )
}

export default BreadCrumb
