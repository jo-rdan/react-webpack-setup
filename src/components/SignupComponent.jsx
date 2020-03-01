import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import apiCall from '../utils/apiCall';

class SignupComponent extends Component {

   state = {
      user: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         address: "",
         bio: "",
         occupation: "",
         expertise: ""
      }
   }

   render() {
      const history = createBrowserHistory({
         forceRefresh: true
      });
      return (
         <div>
            <form>
               <input type="text" placeholder="First Name" onChange={(event) => {
                  this.setState({
                     user: {
                        firstName: event.target.value,
                        lastName: '',
                        email: '',
                        password: '',
                        address: '',
                        bio: '',
                        occupation: '',
                        expertise: ''
                     }
                  })
               }} />
               <input type="text" placeholder="Last Name" onChange={(event) => {
                  this.setState({
                     user: {
                        firstName: this.state.user.firstName,
                        lastName: event.target.value,
                        email: '',
                        password: '',
                        address: '',
                        bio: '',
                        occupation: '',
                        expertise: ''
                     }
                  })
               }} />
               <input type="text" placeholder="Email" onChange={(event) => {
                  console.log('email', event.target.value);

                  this.setState({
                     user: {
                        firstName: this.state.user.firstName,
                        lastName: this.state.user.lastName,
                        email: event.target.value,
                        password: '',
                        address: '',
                        bio: '',
                        occupation: '',
                        expertise: ''
                     }
                  })
               }} />
               <input type="password" placeholder="Password" onChange={(event) => {
                  this.setState({
                     user: {
                        firstName: this.state.user.firstName,
                        lastName: this.state.user.lastName,
                        email: this.state.user.email,
                        password: event.target.value,
                        address: '',
                        bio: '',
                        occupation: '',
                        expertise: ''
                     }
                  })
               }} />
               <input type="text" placeholder="Address" onChange={(event) => {
                  this.setState({
                     user: {
                        firstName: this.state.user.firstName,
                        lastName: this.state.user.lastName,
                        email: this.state.user.email,
                        password: this.state.user.password,
                        address: event.target.value,
                        bio: '',
                        occupation: '',
                        expertise: ''
                     }
                  })
               }} />
               <input type="text" placeholder="Biography" onChange={(event) => {
                  this.setState({
                     user: {
                        firstName: this.state.user.firstName,
                        lastName: this.state.user.lastName,
                        email: this.state.user.email,
                        password: this.state.user.password,
                        address: this.state.user.address,
                        bio: event.target.value,
                        occupation: '',
                        expertise: ''
                     }
                  })
               }} />
               <input type="text" placeholder="Occupation" onChange={(event) => {
                  this.setState({
                     user: {
                        firstName: this.state.user.firstName,
                        lastName: this.state.user.lastName,
                        email: this.state.user.email,
                        password: this.state.user.password,
                        address: this.state.user.address,
                        bio: this.state.user.bio,
                        occupation: event.target.value,
                        expertise: ''
                     }
                  })
               }} />
               <input type="text" placeholder="Expertise" onChange={(event) => {
                  this.setState({
                     user: {
                        firstName: this.state.user.firstName,
                        lastName: this.state.user.lastName,
                        email: this.state.user.email,
                        password: this.state.user.password,
                        address: this.state.user.address,
                        bio: this.state.user.bio,
                        occupation: this.state.user.occupation,
                        expertise: event.target.value
                     }
                  })
               }} />
            </form>
            <button onClick={async () => {
               console.log('state', this.state.user);

               try {
                  const response = await apiCall.post('/api/v2/auth/signup', this.state.user);
                  console.log('👉 Returned data:', response);
                  history.push('/signin')
               } catch (error) {
                  console.log('error', error.message);

               }
            }}>Submit</button>
            <p>Already have an account?<Link to="/signin">Signin</Link></p>
         </div>
      )
   }
}

export default SignupComponent;