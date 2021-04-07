import { connect } from 'react-redux'
import {Link, Route} from 'react-router-dom'
import FamilyDetails from './FamilyDetails'

const FamilyList =({match, families}) =>{
  

  return ( 
    <div>
      <h1>All Families</h1>
      {families.map((family, idx) => (
       <Link key={idx} to={`/families/${family.id}`}>
        <h2>{family.surname}</h2>
        <Route path={`${match.url}/:familyId`} component={FamilyDetails}/>
        </Link>
      ))}
    </div>
   );
}

  const mapStateToProps = state => {
    return {
      families: state.families.families
    }
  }
 
export default connect(mapStateToProps)(FamilyList);