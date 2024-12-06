import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function UserLogout() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token)
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/users/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if (response) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }).catch((error) => {
        console.error("Error during logout:", error.response?.data || error.message);
    })
  return (
    <>
    </>
  )
}

export default UserLogout