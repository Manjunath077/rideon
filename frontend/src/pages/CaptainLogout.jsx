import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CaptainLogout() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if (response) {
            localStorage.removeItem("token")
            navigate('/captainlogin')
        }
    }).catch((err)=>{
        console.log(err.response?.data || err.message)
    })
  return (
    <></>
  )
}

export default CaptainLogout