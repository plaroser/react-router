import React,{Component} from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Users from "./users";
import Notfound from "./notfound";
//import { browserHistory } from 'react-router';
const redirect = ()=>{

}

class Routing extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const changeView = (path,props)=>{
      //browserHistory.push(path,props);
      this.props.history.push(path,props)
    };

    return(
    <Router>
    <div>
      <h1>Head</h1>
      <button onClick={changeView('/youtube',null)}>Púlsame</button>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">Users</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>)
  }
}

ReactDOM.render(<Routing/>, document.getElementById("root"));
