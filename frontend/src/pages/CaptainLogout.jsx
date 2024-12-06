import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CaptainLogout() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/logout`)
  return (
    <></>
  )
}

export default CaptainLogout