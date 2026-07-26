import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../assets/background.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate()
  const [user, setuser] =useState("")
  const [pass, setpass] =useState("")

  function handleuser(evt){
    setuser(evt.target.value)
  }
  function handlepass(evt){
    setpass(evt.target.value)
  }
  function check(){
      
    var logindetails= axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
    logindetails.then(function(data){
      if(data.data==true){
        navigate("/Dashboard")
      }
      else{
        navigate("/Fail")
      }
    })
  }
  return (
    <>
      <Navbar />
      
      <div className="min-h-[calc(100vh-128px)] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="bg-white/90 p-8 rounded-xl shadow-xl w-96">
          <h1 className="text-3xl font-bold text-green-600 text-center">
            FreshMart
          </h1>

          <input onChange={handleuser} type="text" name="username" placeholder="Enter your username" className="w-full border p-3 rounded mt-6"/>

          <input onChange={handlepass} type="password" name="password" placeholder="Password" className="w-full border p-3 rounded mt-4"/>

          <button onClick={check} className="w-full bg-green-600 text-white py-3 rounded mt-6">Login</button>
        </div>
      </div>
     

      <Footer />
    </>
  );
}

export default Login;