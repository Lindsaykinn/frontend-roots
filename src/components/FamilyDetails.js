import { useHistory, useParams } from "react-router"
import useFetch from "../actions/useFetch"

const FamilyDetails = () => {
  const { id } = useParams()
  const { data: family, error, isPending} = useFetch('http://localhost:3001/families/' + id)
  const history = useHistory()

  const handleClick = () => {
    fetch('http://localhost:3001/families/' + family.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/families')
    })
  }

  return ( 
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { family && (
        <article>
          <h2>{ family.surname }</h2>
          <p>{ family.image }</p>
          <p>{ family.story } </p>
      
          <button onClick={handleClick}>Delete Family</button>
        </article>
      )}
    </div>
   );
}
 
export default FamilyDetails;