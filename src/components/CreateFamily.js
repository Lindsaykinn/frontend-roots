import { useState } from "react";
import { useHistory } from 'react-router-dom'

const CreateFamily = () => {
  const [surname, setSurname] = useState('')
  const [country, setCountry] = useState('')
  const [story, setStory] = useState('')
  const [person, setPerson] = useState('')
  const [dob, setDob] = useState('')
  
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const family = { surname, country, story, person, dob }

    setIsPending(true)

    fetch('http://localhost:3001/families', {
      method: 'POST',
      headers: 
        {'Content-Type': 'application/json'},
        body: JSON.stringify(family)      
    }).then(() => {
      console.log('new family added')
      setIsPending(false)
      // history.go(-1)
      history.push('/families')
    })
  }

  return ( 
    <div className="form">
      <h2>Add Family</h2>
      <form onSubmit={handleSubmit}>
        <label>Surname:</label>
        <input 
        type="text"
        name="surname"
        value={surname}
        onChange = {(e) => setSurname(e.target.value)}
        />
        <br/>
        <br/>
        <label>Country of Origin:</label>
        <input 
        type="text"
        name="country"
        value={country}
        onChange = {(e) => setCountry(e.target.value)}
        />
        <br/>
        <br/>
        <label>Family History:</label>
        <textarea 
        type="text"
        name="story"
        value={story}
        onChange={(e) => setStory(e.target.value)}
        ></textarea>
        <br/>
        <br/>
        <label>Family Genealogist:</label>
        <input 
        type="text"
        name="person"
        value={person}
        onChange = {(e) => setPerson(e.target.value)}
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
          {!isPending && <button>Add Family</button>}
          {isPending && <button disabled>Adding Family...</button>}
      </form>
    </div>
   );
}
 
export default CreateFamily;