import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CaptainProtectedWrapper({children}) {
    const {captain,setCaptain} = useContext(CaptainDataContext)
    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(()=>{
        if (!token) {
            navigate('/captainlogin')
        }
    },[token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if (response.status === 200) {
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    }).catch((err)=>{
        console.log(err.message)
        localStorage.removeItem('token')
        navigate('/captainlogin')
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

export default CaptainProtectedWrapper