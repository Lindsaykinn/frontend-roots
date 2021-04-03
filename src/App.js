import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import ErrorPage from './components/Error'
import List from './components/List'
import { connect } from 'react-redux'

class App extends Component {
  render(){
    return (
      <Router>      
          <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route component={ ErrorPage }></Route>
            <Route exact path='/list' component={ List }>All Families</Route>
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
