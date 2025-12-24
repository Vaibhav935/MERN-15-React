import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'

const ProtectedRoute = ({children}) => {
    const {user} = useSelector(state => state.auth)

    // !user ? navigate("/") : null
    if(!user){
        return <Navigate to="/" />
    }
  return children
}

export default ProtectedRoute
