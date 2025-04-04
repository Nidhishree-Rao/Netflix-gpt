import { useState } from 'react'
import Header from './Header'


const Login = () => {
   const [isSignInForm, setIsSignInForm] = useState(true);
   const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
   }
  
  return (
    <div>
      <Header />
      <div className="absolute">
      <img src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg" alt = "bannerimage" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
{     !isSignInForm &&   (<input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-opacity-80" />)
}        <input type="password" placeholder='Password' className= "p-2 my-4 w-full bg-opacity-80"/>
<input type="text" placeholder="Email address" className="p-2 my-4 w-full bg-opacity-80" />
      <button className="w-full p-4 my-4 bg-red-500 rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      <p className="cursor-pointer" onClick={toggleSignInForm}>
      {isSignInForm ? "new to Netflix? Sign Up now" : "Already a registered? Sign In now"}
      </p>
      </form>
      </div>
  )
}

export default Login