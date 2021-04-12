import { useState } from "react";
import { useHistory } from 'react-router-dom'

const CreatePerson = () => {
  const [firstName, setFirstName] = useState('')
  const [dob, setDob] = useState('')

  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const person = { firstName, dob }

    setIsPending(true)

    fetch('http://localhost:3001/people', {
      method: 'POST',
      headers: 
        {'Content-Type': 'application/json'},
        body: JSON.stringify(person)      
    }).then(() => {
      console.log('new person added')
      setIsPending(false)
      // history.go(-1)
      history.go(-1)
    })
  }

  return ( 
    <div className="form">
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
        type="text"
        name="first_name"
        value={firstName}
        onChange = {(e) => setFirstName(e.target.value)}
        />
        <br/>
        <br/>
        <label>Date of Birth:</label>
        <input 
        type="date"
        name="dob"
        value={dob}
        onChange = {(e) => setDob(e.target.value)}
        />
        <br/>
        <br/>
       
          {!isPending && <button>Add Person</button>}
          {isPending && <button disabled>Adding Person...</button>}
      </form>
    </div>
   );
}
 
export default CreatePerson;