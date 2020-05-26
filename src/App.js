import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import login from './components/login';
import registration from './components/registration';
import patient from './components/patient';
import homepage from './components/homepage';
import xyz from './components/xyz';

const initialState = {
  route: "null",
  isSignedIn: false,
  
  user: {
    id: "",
    name: "",
    email: "",
    password: ""
    
  }
};
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        
      }
    });
  };
  onRouteChange = (event,route) =>  {
    event.preventDefault();
    if(route==="signout"){
      this.setState(initialState);
    } else if(route === "patient") {
      this.setState({isSignedIn:true});
    }
    this.setState(() => ({ route: route }));
  }
  render() {
  return (
    <Router>
      <Route exact path="/patient" component={patient}/>
      <Route exact path="/login" component={login}/>
      <Route exact path="/registration" component={registration}/>
    <div className="App">
      
      <Navbar
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
          />
      {this.state.route === "null" ? ( <div>
        <Route exact path="/" component={homepage}/>
        <homepage onRouteChange={this.onRouteChange}/>
        <patient onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> </div>
      ) :this.state.route === "null" ? ( <div>
        
        </div>
      ) : this.state.route === "registration" ? (<div>
        <Route exact path="/patient/xyz" component={xyz}/>
        <xyz route ={this.state.route} name={this.state.user.name}/></div>
      ) : (
        <homepage />
      )}
      
    </div>
    </Router>
  );
}
}

export default App;
