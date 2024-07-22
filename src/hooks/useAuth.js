import { useEffect, useState } from "react"
import { API_URL } from "../constants/env"
import axios from "axios"

const useAuth = ({ username, password }) => {
  const [error, setError] = useState(null)
  const useNavigate = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .post(`${API_URL}/auth/login`, { username, password })
      .then((resp) => {
        localStorage.setItem("token", resp.data.token)
        useNavigate("/")
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return { error, loading }
}

export default useAuth
