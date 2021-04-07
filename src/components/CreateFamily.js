import React, { Component } from 'react'
import { addFamily } from '../actions'
import { connect } from 'react-redux'

class Form extends Component {

  state = {
    name: '',
    country_of_origin: '',
    image: '',
    story: ''
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addFamily(this.state, this.props.history)
  }

  render(){
    return ( 
      <div>
        <h2>Add Family</h2>
        <div className="form">

        <form onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor='surname'>Surname:</label>
            <input type="text" id='surname' name='surname' value={this.state.surname} onChange={this.handleChange}/>
          </div>
          <br/>
          <div>
            <label htmlFor='country_of_origin'>Country of Origin:</label>
            <input type="text" id='country_of_origin' name='country_of_origin' value={this.state.country_of_origin} onChange={this.handleChange}/>
          </div>
          <br/>
          <div>
            <label htmlFor='image'>Image URL:</label>
            <input type="text" id='image' name='image' value={this.state.image} onChange={this.handleChange}/>
          </div>
          <br/>
          <div>
            <label htmlFor='story'>Share a Story:</label>
            <textarea type="text" id='story' name='story' value={this.state.story} onChange={this.handleChange}/>
          </div>
          <br/>
          <input type="submit" value='Add Family'/>
        </form>
        </div>
      </div>
     );
  }
}
 
export default connect(null, { addFamily })(Form);