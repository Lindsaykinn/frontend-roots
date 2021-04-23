import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFamilies } from '../_actions/index'

const FamilyList =() =>{
  const families = useSelector(state => state.families.families)
  const isLoading = useSelector(state => state.families.loading)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getFamilies())
  }, []) 

  if (isLoading){
    return(<div>
      Loading...
    </div>)
  }

  
  return ( 
    <div>
      <h1>All Families</h1> 
      {families.map((family, idx) => (
      <>    
        <Link key={idx} to={`/families/${family.id}`}>
        <h2> {family.surname} </h2>
        </Link>
      </>
      ))}
    </div>
   );
}

  // const mapStateToProps = state => {
  //   return {
  //     families: state.families.families
  //   }
  // }
 
export default FamilyList;