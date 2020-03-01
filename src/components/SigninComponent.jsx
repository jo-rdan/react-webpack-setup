import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import apiCall from '../utils/apiCall';
class SigninComponent extends Component {

   state = {
      user: {
         email: "",
         password: ""
      }
   }
   render() {
      const history = createBrowserHistory({
         forceRefresh: true
      });
      return (
         <div>
            <h2>Signin</h2>
            <form>
               <input type="text" placeholder="Email" onChange={(event) => {
                  this.setState({
                     user: {
                        email: event.target.value,
                        password: ''
                     }
                  })
               }} />
               <input type="password" placeholder="Password" onChange={(event) => {
                  this.setState({
                     user: {
                        email: this.state.user.email,
                        password: event.target.value
                     }
                  })
               }} />
            </form>
            <button onClick={async () => {
               try {
                  const response = await apiCall.post('/api/v2/auth/signin', this.state.user);
                  console.log('👉 Returned data:', response);
                  history.push('/')
               } catch (error) {
                  console.log('error', error.message);
               }
            }}>Submit</button>
         </div>
      )
   }
}

export default SigninComponent;