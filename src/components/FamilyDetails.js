import { connect } from "react-redux"
import { useParams, useHistory } from "react-router"
import { deleteFamily } from '../_actions'
import useFetch from "../_actions/useFetch"


const FamilyDetails = (props) => {
  const { id } = useParams()
  const { data: family, error, isPending} = useFetch('http://localhost:3001/families/' + id)
  const history = useHistory()
  
  return ( 
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { family && (
            <div className='details'>
              <div>
                <h2>{ family.surname }</h2>
                <p>Country of Origin: <b>{ family.country }</b></p>
                <br/>
                <p>Family History: { family.story } </p>
                <br/>
                <p>Genealogist: <b>{ family.person }</b> &nbsp; Date of Birth: { family.dob } </p>
                </div> 
                <br/>
                <button onClick={() => props.deleteFamily(family, history)}>Delete Family</button>
             </div>      
      )}
    </div>
   );
}

const mapDispatchToProps = (dispatch) => { 
    return { deleteFamily: (family, history) => {
      console.log('start delete family')
      dispatch(deleteFamily(family, history))
  }}; 
};

 
export default connect(null, mapDispatchToProps)(FamilyDetails);