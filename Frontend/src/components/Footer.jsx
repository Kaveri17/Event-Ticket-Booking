import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex bg-slate-300">
      <div className="container">
        <div className="title">
          <div className="logo">Logo</div>
          <h2>AKA Events</h2>
        </div>
        <div className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fuga rem
          culpa repudiandae? Amet, quasi nisi ratione saepe perferendis ipsam.
        </div>
      </div>
      <div className="container">
        <div className="title">
          <h2>Company</h2>
        </div>
        <div className="description">
          <Link to="/">
            <li className="text-white hover:text-slate-400">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-white hover:text-slate-400">About Us</li>
          </Link>
          <Link to="/contact">
            <li className=" text-white hover:text-slate-400">Contact Us</li>
          </Link>
          <Link to="/faq">
            <li className="text-white hover:text-slate-400">FAQ</li>
          </Link>
        </div>
      </div>
      <div className="container">
      <div className="title">
          <h2>Quick Links</h2>
        </div>
        <div className="description">
          <Link to="/events">
            <li className="text-white hover:text-slate-400">Upcoming Events</li>
          </Link>
          <Link to="/category">
            <li className="text-white hover:text-slate-400">Categories</li>
          </Link>
          <Link to="/contact,">
            <li className=" text-white hover:text-slate-400">Create Ticket</li>
          </Link>
          <Link to="/faq">
            <li className="text-white hover:text-slate-400">FAQ</li>
          </Link>
        </div>
      </div>
      <div className="container-icon">
        <h2>
          Contact Us
        </h2>
      </div>
    </div>
  );
};

export default Footer;
