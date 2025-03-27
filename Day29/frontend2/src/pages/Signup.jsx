import React, { useEffect, useState } from 'react'

const Signup = () => {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  let obj={
    email,password
  }

  const fetchdata =async()=>{
    const response =await fetch ("https://fakestoreapi.com/products")
    const res =await response.json();
    setdata
  }

  return (
    <div className='parent'>
      <h1>Signup page</h1>
      <input type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='Enter Password'onChange={(e)=>setEmail(e.target.value)}/>
      <button>Submit</button>
      <p>Already have an account?<a href="/login"></a></p>
      
    </div>
    
  )
}

export default Signup