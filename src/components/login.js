import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import Header from './header'


function Login() {
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem("userData")){
            history.push("/add")
        }
    },[])

    return (
        <div>
                              <Header/>

<h1>Login</h1>


        </div>
    )
}

export default Login
