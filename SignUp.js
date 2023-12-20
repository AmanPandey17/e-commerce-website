import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [name,setName]=useState("");
    const [password,setpassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
      const auth= localStorage.getItem('user');
      if(auth)
      {
        navigate('/')
      }
    })

    const collectData=async ()=>{
        console.warn(name,email,password)
        let result = await fetch('http://localhost:5000/register',{
          method:"post",
          body:JSON.stringify({name,email,password}),
          header:{
            'content-Type': 'application/json'
          },
        });
        result= await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result)
        {
          navigate('/')
        }


    }
  return (
   <div className='register'>
     <h1>Register</h1>
      <input className="input-box" type='text'value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
      <input className="input-box" type='text'value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'></input>
      <input className="input-box" type='password'value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password'></input>
      <button onClick={collectData } className='appbutton' type='button'>SignUp</button>
   
   </div>
  )
}

export default SignUp
