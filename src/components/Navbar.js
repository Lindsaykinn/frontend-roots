import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to='/'><h1>Roots</h1></Link>
      <div className="links">
      <Link to='/families/new'>Add Family</Link>
      &nbsp;
      <Link to='/families'>All Families</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;