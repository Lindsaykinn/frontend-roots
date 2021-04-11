import { connect } from "react-redux"
import { useParams, useHistory } from "react-router"
import { deleteFamily } from '../_actions'
import useFetch from "../_actions/useFetch"
import Person from './Person'

const FamilyDetails = (props) => {
  const { id } = useParams()
  const { data: family, error, isPending} = useFetch('http://localhost:3001/families/' + id)
  const history = useHistory()

  return ( 
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { family && (
        <div>
          <h2>{ family.surname }</h2>
          <p>{ family.country_of_origin }</p>
          <p>{ family.story } </p>          

          <p>{family.people.map(p => {
            return (<Person person={p} key = {p.id} /> )
          })}</p>

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