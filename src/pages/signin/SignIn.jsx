import { useContext } from "react";
import signinani from "../../assets/lotties/Login and Sign up.json"
import Lottie from "lottie-react";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const { signIn } = useContext(AuthContext)
  const handleSignIn = e => {
    e.preventDefault();
    const email = e.target.email.value
    const pass = e.target.password.value

    signIn(email, pass)
    .then(userCredential => {
      console.log(userCredential.user);
    })
    .catch(err => {
      console.log(err.code);
      
    })
    console.log(email, pass);

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center w-1/3 ">
          <Lottie animationData={signinani} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;