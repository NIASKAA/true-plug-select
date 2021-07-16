import './App.css';
import {Navigation, Footer}from './Components'
import {Home, About} from './Pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
