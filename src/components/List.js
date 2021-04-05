import React, { Component } from 'react'
import { connect } from 'react-redux'
import Family from './Family'
import {Link} from 'react-router-dom'

const List =({families, name}) =>{

  return ( 
    <div>
      <h2>All Families</h2>
      {families.map((family) => (
        <Link to={`/families/${family.id}`}>
        <h2>{family.name}</h2>
        </Link>
      ))}
    </div>
   );
}

  const mapStateToProps = state => {
    return {
      families: state.families
    }
  }
 
export default connect(mapStateToProps)(List);