import { useState } from "react";
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";


const Auth = () => {


    const [showSignInForm, setShowSignInForm] = useState(true)




    return (
        <div className="min-h-screen flex flex-col justify-center items-center">

        
            {
                (showSignInForm) ? (
                    <SignIn signUpRequest={()=>{
                        setShowSignInForm(false)
                    }}/>
                ) : (
                    <SignUp signInRequest={()=>{
                        setShowSignInForm(true)
                    }} />
                )
            }
        </div>
    );
}


export default Auth;


