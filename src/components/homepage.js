import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';
import login from './login';
class homepage extends Component {
    constructor(props){
        super(props);
        
    }
    onClick = event => {
        //this.props.onRouteChange("customer");
        
        this.props.history.push("/patient")
        event.preventDefault()
    }
    render() {
const { onRouteChange, isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <div>
          <Link
            //onClick={() => onRouteChange("signout")}
            className="f3 link dim black underline pa3 pointer"
          >
            signout
          </Link>
        </div>
      );
    } else {
      return ( <div>
      <Link
        onClick={this.onClick}
        className="f3 link dim black underline pa3 pointer"
      >
        patient
      </Link>
    </div>
     );
    }
  }
}

export default homepage;