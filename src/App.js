import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
    </Router>
  );
}

export default App;
