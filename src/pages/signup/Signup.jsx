import Lottie from "lottie-react";
import signupanimation from "../../assets/lotties/Signup.json"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import SocialLogin from "../shared/SocialLogin";;

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = e => {
    e.preventDefault();
    const form = e.target
    // const formData = new FormData(form);
    // const formObject = Object.fromEntries(formData.entries())
    const email = form.email.value
    const pass = form.password.value
    createUser(email, pass)
    .then(res => {
      console.log(res.user);
      
    })
    .catch(err => {
      console.log(err);
      
    })

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex justify-center w-1/3">
          <Lottie animationData={signupanimation} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <form onSubmit={handleSignup} className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;