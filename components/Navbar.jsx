import { useRouter } from "next/router";
import { useContext } from "react";
import { authContext } from "../contexts/AuthContextWrapper";


const Navbar = () => {
    const router = useRouter()
    const auth = useContext(authContext)
    return (
        <div className="h-14 bg-teal-600 font-semibold flex justify-between items-center px-8 text-white">
                <div className="text-2xl">
                    BIT FORUM
                </div>
                <div>
                    <button onClick={()=>{
                        auth.signOut
                        router.push('/')
                    }}>Log Out</button>
                </div>
        </div>
    )
}

export default Navbar;