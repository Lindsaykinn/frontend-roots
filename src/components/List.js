import React, { Component } from 'react'
import { connect } from 'react-redux'
import Family from './Family'

class List extends Component {
  render(){
    const families = this.props.families.map( (family, i) => <Family key={i} name={family.name} />)
    return ( 
      <div>
        <h2>All Families</h2>
        { families }
      </div>
     );
  }
  }

  const mapStateToProps = state => {
    return {
      families: state.families
    }
  }
 
export default connect(mapStateToProps)(List);