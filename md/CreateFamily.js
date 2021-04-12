import React, { Component } from 'react'
import { addFamily } from '../_actions'
import { connect } from 'react-redux'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: '',
      country: '',
      story: '',
      people_attributes:[{
        first_name: '', 
        dob: ''
      }]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })    
  }

  handlePeopleChange(e){
    console.log(e.target)
    const newPeopleAttributes = {...this.state.people_attributes[0], [e.target.name]: e.target.value}
    this.setState({
      people_attributes: [newPeopleAttributes]
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
            <label htmlFor='country'>Country of Origin:</label>
            <input type="text" id='country' name='country' value={this.state.country} onChange={this.handleChange}/>
          </div>
          <br/>
          <div>
            <label htmlFor='story'>Family Story:</label>
            <textarea type="text" id='story' name='story' value={this.state.story} onChange={this.handleChange}/>
          </div>
          <br/>
          <div>
            <label htmlFor='first_name'>Family Member:</label>
            <input type="text" id='first_name' name='first_name' value={this.state.people_attributes[0].first_name} onChange={this.handlePeopleChange}/>
          </div>
          <br/>
          <div>
            <label htmlFor='dob'>Date of Birth:</label>
            <input type="date" id='dob' name='dob' value={this.state.people_attributes[0].dob} onChange={this.handlePeopleChange}/>
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