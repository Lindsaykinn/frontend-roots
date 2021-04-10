import React, { Component } from 'react'
import { addFamily } from '../_actions'
import { connect } from 'react-redux'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country_of_origin: '',
      story: '',
      person:{
        name: '', 
        dob: ''
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
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
            <label htmlFor='story'>Family Story:</label>
            <textarea type="text" id='story' name='story' value={this.state.story} onChange={this.handleChange}/>
          </div>
          <br/>
          <div>
            <label htmlFor='person'>Family Member:</label>
            <input type="text" id='person' name='person' value={this.state.person.name} onChange={this.handleChange}/>
          </div>
          <br/>
          <div>
            <label htmlFor='dob'>Date of Birth:</label>
            <input type="date" id='dob' name='dob' value={this.state.person.dob} onChange={this.handleChange}/>
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