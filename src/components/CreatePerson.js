import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { addPerson, getFamilies } from '../_actions/index'

const CreatePerson = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')  
  const [isPending, setIsPending] = useState(false)
  
  const history = useHistory()
  //dispatch any action to the store by simply adding an action as an argument to the new variable 
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const person = { name }
    const families = { surname }

    setIsPending(true)

    dispatch(addPerson(person, history))
    dispatch(getFamilies(families, history))

    

    // fetch('http://localhost:3001/families', {
    //   method: 'POST',
    //   headers: 
    //     {'Content-Type': 'application/json'},
    //     body: JSON.stringify(family)      
    // }).then(() => {
    //   console.log('new family added')
    //   setIsPending(false)
    //   // history.go(-1)
    //   history.push('/families')
    // })
  }

  return ( 
    <div className="form">
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
        type="text"
        name="name"
        value={name}
        onChange = {(e) => setName(e.target.value)}
        />
        <br/>
        <br/>
        <label>Family: </label>
        <select 
        type="text"
        name="surname"
        value={surname}
        onChange = {(e) => setSurname(e.target.value)}>
        <option value={surname}>{surname}</option>
        <option value="Graham"></option>
        </select>
        <br/>
        <br/>
        
        <br/>
          {!isPending && <button>Add Person</button>}
          {isPending && <button disabled>Adding Person...</button>}
      </form>
    </div>
   );
}
 
export default CreatePerson;