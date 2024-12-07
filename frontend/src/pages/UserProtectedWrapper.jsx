import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserProtectedWrapper({children}) {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {user,setUser} = useContext(UserDataContext)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        if (!token) {
            navigate('/login')
        }
    },[token])
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/users/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if (response.status === 200) {
            setUser(response.data.user)
            setIsLoading(false)
        }
    }).catch((err)=>{
        console.log(err.message)
        localStorage.removeItem('token')
        navigate('/login')
    })

    if (isLoading) {
        return(
            <div>Loading ...</div>
        )
    }
    return (
        <>{children}</>
    )
}

export default UserProtectedWrapper