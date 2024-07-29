import axios from "axios"
import { useState, useEffect } from "react"
import { API_URL } from "../constants/env"

const useAuthFetch = (endpoint, method = "GET", headers = {}) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_URL}/${endpoint}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...headers,
      },
    })
      .then((resp) => {
        setData(resp.data)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return { data, error, loading }
}

export default useAuthFetch
