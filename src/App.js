import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
