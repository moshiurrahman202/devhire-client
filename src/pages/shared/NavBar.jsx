import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";


const NavBar = () => {
  const {signOutUser, user} = useContext(AuthContext)
  const navigate =useNavigate()
  const handlesingOut = () => {
    signOutUser()
    .then(() => {
      navigate("/")
    })
    .catch(err => {
      console.log(err);
      
    })

  }
  const links = <>
  <li><NavLink to="/">Home</NavLink></li>
  {user && <li><NavLink to="/myapplications">My Application</NavLink></li>}
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <NavLink className="btn btn-ghost text-xl" to="/">DevHire</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <button onClick={handlesingOut}>Sign Out</button> : <>
      <NavLink className="btn" to="/signup">Sign Up</NavLink>
    <NavLink className="btn" to="/signin">Sign In</NavLink></>
    }
  </div>
</div>
    );
};

export default NavBar;