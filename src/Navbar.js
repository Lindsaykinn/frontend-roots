import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to='/'><h1>Roots</h1></Link>
      <div className="links">
      <Link to='/AddFamily' style={{
        color: '#e4eddb',
        backgroundColor: '#144d53',
        borderRadius: '8px'
      }}>Add Family</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;