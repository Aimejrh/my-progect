import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) return;

    navigate('/RegisterForm')
  }, [])


  return (
    <div>
      progile
    </div>
  )
}
