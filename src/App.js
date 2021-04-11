import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFamilies } from './_actions'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorPage from './components/Error'
import FamilyList from './components/FamilyList'
import CreateFamily2 from './components/CreateFamily2'
import FamilyDetails from './components/FamilyDetails'
import Slideshow from './components/Slideshow'

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
            <Route exact path='/'><Slideshow /></Route>
            <Route exact path='/families' component={ FamilyList }/>
            <Route exact path='/families/new' component={ CreateFamily2}></Route>
            <Route exact path= "/families/:id" component={ FamilyDetails }></Route> 
            <Route component={ ErrorPage }></Route>
          </Switch>
        </div>
        <div>
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
