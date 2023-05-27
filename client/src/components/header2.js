import { Link } from "react-router-dom";
 
const Header2 = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="header-title">Weather</h1>
        <p>"Know your surrounding"</p>
      </div>
      <div className="header-links">
        <Link className="header-items" to="/">Home</Link>
        <Link className="header-items" to="/profile">Profile</Link>
        {/* <Link className="header-items" to="/login">login</Link> */}
        <Link className="header-items" to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Header2;