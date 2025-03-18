import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from '../../component/Menu';
function DashboardLayout() {
  return (
    <div>
        <Menu/>
        <div id="contend">
            <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout
