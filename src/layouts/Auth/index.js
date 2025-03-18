import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './styles.css'

function AutLayout() {
  return (
    <div className='outh-container'>
      <div className='outh-menu'>
      <Link to="/auth">Giriş</Link>
      <Link to="/auth/register">Kayıt Ol</Link>
      </div>
       
        <hr/>
        <Outlet/>
    </div>
  )
}

export default AutLayout