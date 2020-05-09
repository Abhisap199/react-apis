import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

 class UserShow extends Component {
     constructor(props)
     {
         super()
         this.state={
             user:{},
             posts:[]
         }
     }
        
     componentDidMount(){  
       const id = this.props.match.params.id
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then((response)=>{
           const user =response.data
            this.setState({user})
            
       })
       console.log(this.props);
       
       axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
       .then((response)=>{
           const posts = response.data
           this.setState({posts})
       })
     }
    render() {
        return (
            <div>
            <h1>USER NAME : {this.state.user.name}</h1>
            <h2>POSTS WRITTEN BY USER</h2>
            <ul>
                {
                    this.state.posts.map(e =><li key={e.id}><Link to={{pathname : `/postlist/${e.id}`,state:{userId:e.userId}}}>{e.title}</Link></li>)
                }
            </ul>
            </div>
        )
    }
}
export default UserShow     