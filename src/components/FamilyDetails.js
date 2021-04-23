import { useEffect, useState } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router"
import { deleteFamily, getFamily } from '../_actions'


const FamilyDetails = (props) => {
  const { id } = useParams()
  const family = useSelector(state => state.families.family)
  const history = useHistory()
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(getFamily(id))
  }, [])

  if (family){
    return ( 
      <div>  
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
            <br/>
          </div>      
            <div>
              <button onClick={() => props.deleteFamily(family, history)}>Delete Family</button>
            </div>
      </div>
     );
     
  }
  return(<div>Loading...</div>)
  

}

const mapDispatchToProps = (dispatch) => { 
    return { deleteFamily: (family, history) => {
      console.log('start delete family')
      dispatch(deleteFamily(family, history))
  }}; 
};

 
export default connect(null, mapDispatchToProps)(FamilyDetails);