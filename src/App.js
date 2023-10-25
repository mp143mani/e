import React from 'react'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import Signin from './components/Signin'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  // console.log(process.env.REACT_APP_API_URL)
  return (
    <BrowserRouter>
    <Routes>
            <Route path='/sign-in' element={<Signin/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/*' element={<Navigate to="/sign-in"/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App