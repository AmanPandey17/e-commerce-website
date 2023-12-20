import React,{useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';


const Navbar=()=> {
  const auth= localStorage.getItem('user');
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/signup')

  }
  return (
    <div>
     
      <img 
       alt="logo"
       className='logo'
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_4BcuLb5pzDLFnDBZdncRwwP4mRKi5smBBXar1mgun0QJb2R_b4vI_on_A&s'></img>
       {   auth ? <ul className='nav-ul'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
      </ul>
        :
        <ul className="nav-ul nav-right">
            <li><Link to="/signup">SignUp</Link></li>
               <li><Link to="/login">Login</Link></li> 
        </ul>
} 

    </div>
  )
      }  

export default Navbar;