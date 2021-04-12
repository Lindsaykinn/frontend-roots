const Person = ({person, ...props}) => {
  return ( 
    <>
    <h3>{person.first_name}</h3>
    <h3>{props.dob}</h3>
    </>
   );
}
 
export default Person;