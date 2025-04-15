import React, { useState } from "react";
import "./LoginStyle.css"
function Login (){

    const [action , setAction] = useState("Sign Up");

    return (
        <div className="container"> 
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

                {action === "Login"? 
                <div></div>    :
                
                <div className="input">
                    <img src="/icon/user_icon.png" alt="User Icon" />
                    <input className="login__input" type="text" placeholder="Name" />
                </div>
        }
                

                <div className="input">
                    <img src="/icon/email_icon.png" alt="Email Icon" />
                    <input className="login__input" type="email" placeholder="Email id" />
                </div>

                <div className="input">
                    <img src="/icon/pass_icon.png" alt="Password Icon" />
                    <input className="login__input" type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot__password"><span>Forgot password ?</span></div>}
            <div className="submit__container">
                <div className={action === "Login"? "submit lg": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"? "submit lg" :"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default Login;