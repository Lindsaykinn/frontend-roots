import React, {Component} from 'react'

class Family extends Component {
  render(){
    const { name, image, story } = this.props
    return (
      <div>
        <h3>{ name }</h3>
        <p>{ image }</p>
        <p>{ story }</p>
      </div>
    )
   }
}

export default Family;