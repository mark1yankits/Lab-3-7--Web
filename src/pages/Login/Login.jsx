import React, { useState } from "react";
import "./LoginStyle.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";
// storage
import { getFirestore, doc, setDoc } from "firebase/firestore";


function Login (){
    const auth = getAuth(app);
    const navigate = useNavigate();
     // storage 
    const db = getFirestore(app); 
    // state
    const [action , setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async ()=>{
        setError("")

        if(!email || !password|| (action === "Sign Up" && !name)){
            setError("Please fill in all fields");
            return;
        }
        try{
            if(action === "Sign Up"){
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, {
                    displayName: `${name} ${surname}`,
                })

                // in Firestore
                const user = userCredential.user;
                await setDoc(doc(db, "User", user.uid), {
                    name: name,
                    surname: surname,
                    email: email,
                    phoneNumber: "", 
                    photoURL: "", 
                    password:password
                });

                console.log("User registered:", userCredential.user);
                setIsLoggedIn(true);
                navigate("/profile"); 
            }
            else{
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log("User logged in:", userCredential.user);
                setIsLoggedIn(true);
                navigate("/profile"); 
            }
        }catch(err){
            console.error(err);
            setError(err.message); 
        }

    };
    return (
        <div className="container"> 
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

                {action === "Login"? 
                <div></div>    :
                <>
                    <div className="input">
                        <img src="/icon/user_icon.png" alt="User Icon" />
                        <input
                            className="login__input" 
                            type="text" 
                            placeholder="Name" 
                            value={name} 
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    
                    <div className="input">
                        <img src="/icon/user_icon.png" alt="Surname Icon" />
                        <input 
                            className="login__input" 
                            type="surname" 
                            placeholder="surname" 
                            value={surname}
                            onChange={(e)=>{setSurname(e.target.value)}}
                        />
                    </div>
                    </>
                }
                
                <div className="input">
                    <img src="/icon/email_icon.png" alt="Email Icon" />
                    <input 
                        className="login__input" 
                        type="email" 
                        placeholder="Email id" 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>

                <div className="input">
                    <img src="/icon/pass_icon.png" alt="Password Icon" />
                    <input 
                        className="login__input"
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
            </div>
            {error && <div className="error">{error}</div>}
            {action === "Sign Up" ? <div></div> : <div className="forgot__password"><span>Forgot password ?</span></div>}
            <div className="submit__container">
                <div className={action === "Login"? "submit lg": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"? "submit lg" :"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
            <div className="submit actual-submit" onClick={handleSubmit}>
                {action}
            </div>
        </div>
    )
}

export default Login;