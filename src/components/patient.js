import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import { render } from 'react-dom';
// import login from './login';
// class patient extends Component {
//     constructor(props){
//         super(props)
//         this.state= {
//             patientID: '',
//             pass: '',
//             data: [],
//         };
        
//     }
//     submitHandler = async event => {
//       event.preventDefault()
//         await fetch(`http://192.168.42.203:3005/plogin`, {
//             mode: 'cors',
//             method: "post",
//             headers: { "Content-Type": "application/json" },
//             header: {"Access-Control-Allow-Origin":"*" },
//             body: JSON.stringify({
//               patientID: this.state.patientID,
//               pass: this.state.pass,
              
//             })
//           })
//             .then(response => response.json())
//             .then(data => {
//               //data : data
//               this.props.loadUser(data);
//             console.log("yes");
//             console.log(data);   
//             this.props.onRouteChange("patient");
//                 alert(`${this.state.patientID}`)
//                 this.props.history.push("/patient/xyz")
//             })
//             alert("noo")
             
//         //this.props.onRouteChange("patient");
        
        
//     }
//     changeUsername = event => {
//         event.preventDefault()
//         this.setState({
//             patientID : event.target.value
//         });
//     }
//     changePassword = event => {
//         event.preventDefault()
//         this.setState({
//             pass: event.target.value
//         });
//     }
    //render() {
      const patient =({onRouteChange}) => {
        return <p onClick={(event) => onRouteChange(event, "registration")}>register</p>
      
    };
//     const { onRouteChange, loadUser } = this.props;
//     return(
//     <div>
//     <h1></h1>
//     patient
//     <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
//         <main className="pa4 black-80">
//           <div className="measure">
//             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//               <legend className="f1 fw6 ph0 mh0">Sign In</legend>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="username">
//                   Username
//                 </label>
//                 <input
//                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="text"
//                   name="patientID"
//                   id="patientID"
//                   onChange={this.changeUsername}
//                 />
//               </div>
//               <div className="mv3">
//                 <label className="db fw6 lh-copy f6" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="password"
//                   name="pass"
//                   id="passw"
//                   onChange={this.changePassword}
//                 />
//               </div>
//             </fieldset>
//             <div className="">
//               <input
//                 onClick={this.submitHandler}
//                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
//                 type="submit"
//                 value="Sign in"
//               />
//             </div>
//             <div className="lh-copy mt3">
//               <p
//                 onClick={() => onRouteChange("registration")} 
//                 className="f6 link dim black db pointer"
//               >
//                 Register 
//               </p>
//             </div>
//           </div>
//         </main>
//       </article>            
//     </div>
//         )
//     }
// }
export default patient;