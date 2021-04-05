import {useParams} from 'react-router-dom'
import {getFamilies} from './actions'

const FamilyDetails = () => {
  const { id } = useParams()
  const { family } = getFamilies('http://localhost:3001/families' + id)
  
  return ( 
    <div>
     {family && (
       <article>
         <h2>{family.name}</h2>
         {/* <p>Stories: {family.story}</p> */}
       </article>
     )}
    </div>
   );
}
 
export default FamilyDetails;