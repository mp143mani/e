import React from 'react'
import { useNavigate } from 'react-router-dom'

function Uselogout() {
  let navigate = useNavigate()
return()=>{
    sessionStorage.clear()
navigate('/sign-in')
}
  
}

export default Uselogout