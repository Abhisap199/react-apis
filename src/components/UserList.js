import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom' 

 class UserList extends Component {
     constructor()
     {
         super()
         this.state ={
             users:[]
         }
     }
     componentDidMount(){
         axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then((response) =>{
             const users = response.data
             this.setState({users})
         })
     }

    render() {
        return (
            <div>
                <h1>User List : {this.state.users.length}</h1>
              <ul>
              {
                  this.state.users.map(e => <li key={e.id}><Link to={`users/${e.id}`}>{e.name}</Link></li>)
              }
              </ul>  
            </div>
        )
    }
}
export default UserList