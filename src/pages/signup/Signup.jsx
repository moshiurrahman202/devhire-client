import Lottie from "lottie-react";
import signupanimation from "../../assets/lotties/Signup.json"

const Signup = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex justify-center w-1/3">
      <Lottie className="text-center" animationData={signupanimation} loop={true} />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signup;