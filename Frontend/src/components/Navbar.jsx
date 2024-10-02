import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      // handleNav();
      // console.log("outside clicked")
      setNavbar(false);
    }
  };
  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className="bg-teal-600 text-base py-4 sticky">
      <div className=" flex justify-between items-center px-2 py-3 w-11/12 mx-auto">
        <div className="w-1/3 bg-slate-300 flex items-center">
        <div className="logo w-[15%]">
        <img src="/logo.png" alt="AKA Ticket"  className="rounded-full w-full"/> 
        </div>
        <span className="heading">AKA Ticket</span>

        </div>
        <div className="nav-content w-2/3 bg-neutral-500 hidden md:flex justify-between list-none">
          {/* <ul className=""> */}
          <Link to='/'>
            <li className="text-white hover:text-slate-400">Home</li>
          </Link >
          <Link to='/about'>
            <li className="text-white hover:text-slate-400">About Us</li>
          </Link>
          <Link to='/events'>
            <li className=" text-white hover:text-slate-400">
              Upcoming Events
            </li>
          </Link>
          <Link to='/contact'>
            <li className=" text-white hover:text-slate-400">Contact Us</li>
          </Link>
            <Link to='/login'>
              <li className="text-white hover:text-slate-400">Login</li>
            </Link>
            <Link to='/register'>
              <li className="text-white hover:text-slate-400">Register</li>
            </Link>
          {/* </ul> */}
        </div>
        <div onClick={handleNavbar} className="md:hidden cursor-pointer">
          menuicon
        </div>
      </div>
      <div
        className={
          navbar
            ? "fixed right-0 top-0 w-[65%] md:hidden h-screen opacity-80 bg-teal-600 p-10 ease-in duration-100"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
        }
        ref={sidebarRef}
      >
        <div className="flex justify-end cursor-pointer" onClick={handleNavbar}>
          Close navbar icon
        </div>
        <div className="list-none py-2">
          <Link to='/'>
            <li className="py-2 text-white hover:text-slate-400">Home</li>
          </Link>
          <Link to='/about'>
            <li className="py-2 text-white hover:text-slate-400">About Us</li>
          </Link>
          <Link to='/events'>
            <li className="py-2 text-white hover:text-slate-400">
              Upcoming Events
            </li>
          </Link>
          <Link to='/contact'>
            <li className="py-2 text-white hover:text-slate-400">Contact Us</li>
          </Link>
          <Link to='/login'>
            <li className="py-2 text-white hover:text-slate-400">Login</li>
          </Link>
          <Link to='/register'>
            <li className="py-2 text-white hover:text-slate-400">Register</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
