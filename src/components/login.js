import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';

function Login() {
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem("userData")){
            history.push("/add")
        }
    },[])

    return (
        <div>
            
        </div>
    )
}

export default Login
