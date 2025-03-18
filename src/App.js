import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/dashboard/Home";
import Users from "./pages/dashboard/Users"
import UsersDetay from "./pages/dashboard/UsersDetay"
import Contact from "./pages/dashboard/Contact";

import Login from "./pages/Auth/Login";
import DashboardLayout from "./layouts/Dashboard/index";
import AutLayout from "./layouts/Auth/index";
import Register from "./layouts/Auth/Register";
import Error404 from "./Error404";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<DashboardLayout/>}>
          <Route index element={<Home />}/>
          <Route path="users" element={<Users />}/>
          <Route path="users/:id" element={<UsersDetay />}/>
          <Route path="contact" element={<Contact />} />  
        </Route>
        <Route path="auth" element={<AutLayout/>}>
          <Route index element ={<Login />} />  
          <Route path="register" element ={<Register />} />  
        </Route>
        <Route path="*" element={<Error404/>} />
    </Routes>
  </BrowserRouter>      
  );
}

export default App;
