import React,{useEffect, useState} from 'react'
import { Link, useParams,useLocation } from 'react-router-dom'

function UsersDetay() {
    const {id} =useParams();
    const location=useLocation();
    const[user,setUser]=useState(location.state);
    
    
     useEffect(
        ()=>{ if(!user?.id){
          fetch(`${process.env.REACT_APP_API_ENDPOINT}/Users/${id}`)
          .then((res)=>res.json())       
          .then((data)=>setUser(data))}
                },[id,user]);
  return (
    <div>
        <h2>Kullanıcı Detay Bilgileri</h2>
        {user && <pre>{JSON.stringify(user,null,2)}</pre>}
        {/* {location.state && <pre>{JSON.stringify(location.state,null,2)}</pre>} */}
        <Link to={`/users/${Number(id)+1}`}>Soraki</Link>
    </div>
  )
}

export default UsersDetay