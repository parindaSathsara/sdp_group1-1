// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Masterpage from './AdminSide/Masterpage/Masterpage';
import Landing from './Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

            {/* <Route exact path="/" component={Login}></Route> */}

            <Route exact={true} path="/" component={Landing} ></Route>
            <Route path="/adminmasterpage" name="Admin" render={(props) => <Masterpage {...props}/>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
