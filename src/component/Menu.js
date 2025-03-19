import React from 'react';
import { Link} from 'react-router-dom';
//import { Link ,useNavigate} from 'react-router-dom';

function Menu() {
  //const navigate=useNavigate();
  return (
    <div>
       <ul className='menu'>
        {/* <li><a href="#/" onClick={()=>navigate(-1)}>Geri-a ile</a></li>
       <li onClick={()=>navigate(-1)}>Geri</li> */}
       {/* not:sayfanın gidip gelmesi sağlar. */}
       {/* <li>     
        <a href="/">anaSayfa(test)</a> 
       </li> */}
       <li>
        <Link to="/">anaSayfa</Link>
       </li>
       <li>
       <Link to="users">kullanıcı</Link>
       
        
        </li>
       <li>
       <Link to="contact">iletişim</Link>
        </li>
       
    </ul>
    </div>
  )
  
}

export default Menu