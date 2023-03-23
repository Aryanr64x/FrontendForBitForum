import { useState } from "react";
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";


const Auth = () => {


    const [showSignUpForm, setShowSignUpForm] = useState(true)




    return (
        <div>

            <div>
                <button onClick={() => {

                    setShowSignUpForm(!showSignUpForm)

                }} className="px-2 py-2 bg-teal-700 text-white
                mt-8"> Dont have an account ?</button>
            </div>

            {
                (showSignUpForm) ? (
                    <SignIn />
                ) : (
                    <SignUp />
                )
            }
        </div>
    );
}


export default Auth;


