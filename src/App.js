import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFamilies } from './actions'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import ErrorPage from './components/Error'
import List from './components/List'
import Form from './components/Form'

class App extends Component {
  componentDidMount(){
    this.props.getFamilies()
  }
  render(){
    if (this.props.loading){
      return (
        <h3>Loading...</h3>
      )
    }
    return (
      <Router>      
          <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/families' component={ List }></Route>
            <Route exact path='/families/new' component={ Form }></Route>
            <Route component={ ErrorPage }></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}
export default connect(mapStateToProps, { getFamilies })(App);
