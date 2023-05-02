import { useEffect } from 'react'

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem('token')
  useEffect(() => {}, [token])
  return children
}
