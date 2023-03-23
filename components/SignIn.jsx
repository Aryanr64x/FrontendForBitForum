const SignIn = () => {

    let username = ""
    let password = ""

    return (
        <div>
            <div className="text-5xl">
                Create a new account
            </div>

            <div className="mt-8">
                <div className="">
                    <input type="text" onChange={(e)=>{
                        username = e.target.value
                    }} className="px-2 py-2 border-black border-2" placeholder="Enter the user id" />
                </div>
                <div className="mt-4">
                    <input onChange={(e)=>{
                        password = e.target.value
                    }} type="password" className="px-2 py-2 border-black border-2" placeholder="Enter the password" />
                </div>
               
            </div>

            <button className="px-2 py-2 bg-teal-700 text-white
            mt-8" onClick={()=>{
                console.log(username)
                console.log(password)
            }}>
                SIGN In
            </button>
        </div>
    )
}

export default SignIn;