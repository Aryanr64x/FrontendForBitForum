const SignUp = () => {
    let username=""
    let password=""
    let confirmpassword=""

    return (
        <div>
            <div>
                <div className="text-5xl">
                    Welcome Back
                </div>

                <div className="mt-8">
                    <div className="">
                    <input type="text" onChange={(e)=>{
                        username=e.target.value
                    }}

                         className="px-2 py-2 border-black border-2" placeholder="Enter the user id" />
                    </div>
                    <div className="mt-4">
                        <input onChange={(e)=>{
                            password=e.target.value
                        }}

                         type="password" className="px-2 py-2 border-black border-2" placeholder="Enter the password" />
                    </div>

                    <div className="mt-4">
                        <input onchange={(e)=>{
                            confirmpassword=e.target.value
                        }}
                        type="text" className="px-2 py-2 border-black border-2" placeholder="Enter the password again" />

                    </div>

                </div>

                <button className="px-2 py-2 bg-teal-700 text-white
mt-8">  onclick={()=>{
    console.log(username)
    console.log(password)
    console.log(confirmpassword)
}
}
                    SIGN Up
                </button>
            </div>

        </div>

    )
}

export default SignUp;