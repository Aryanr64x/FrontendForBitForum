import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="text-5xl">
                Welcome to BIT FORUM 
            </div>

            <div className="mt-16">
              <Link  className="px-4 py-4 bg-teal-400 " href="/auth">
                  SIGN IN 
              </Link>
           
            </div>
      </div>
    </div>
  )
}



