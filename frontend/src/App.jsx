import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSignup/>}/>
      <Route path='/captainlogin' element={<Captainlogin/>}/>
      <Route path='/captainsignup' element={<CaptainSignup/>}/>
      <Route path='/riding' element={<Riding/>}/>
      <Route path='/home' element={
        <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>
      }/>
      <Route path='/user/logout' element={
        <UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>
      }/>
      <Route path='/captainhome' element={
        <CaptainProtectedWrapper>
          <CaptainHome/>
        </CaptainProtectedWrapper>
      }/>
      <Route path='/captain/logout' element={
        <CaptainProtectedWrapper>
          <CaptainLogout/>
        </CaptainProtectedWrapper>
      }/>
    </Routes>
  )
}

export default App