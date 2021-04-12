import { Link } from "react-router-dom";

const Footer = () => {
  return ( 
      <div className='footer'>
        &copy; Property of Lindsay Kinn
        <Link to="/about"><h5>About this Website</h5></Link>
      </div>
   );
}
 
export default Footer;