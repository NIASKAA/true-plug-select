import './App.css';
import {Navigation, Footer}from './Components'
import {Home, About, TopBrands, Login, SignUp, Bids} from './Pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/bids' component={Bids}/>
            <Route path="/about" component={About}/>
            <Route path='/brands' component={TopBrands}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
