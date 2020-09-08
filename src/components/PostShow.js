import React, { Component } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

 class PostShow extends Component {
     constructor(){
         super()
         this.state={
             user:{},
             post:{},
             comments:[]
         }
     }
     componentDidMount(){
        const id=this.props.match.params.id
        //const userId=this.props.history.location.key      
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const post=response.data
            this.setState({post})

                axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then((response)=>{
                    const user= response.data
                    this.setState({user})
                })
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response)=>{
            const comments=response.data
            this.setState({comments})
        })
     }
    render() {
        return (
            <div>
              <h1>USER NAME:{this.state.user.name}</h1>
              <h2>TTTLE:{this.state.post.title}</h2> 
              <h2>BODY:</h2>
              <h3>{this.state.post.body}</h3>
              <hr/>
              <h1>COMMENTS</h1>
              <ul>
                  {
                    this.state.comments.map(e =><li key={e.id}>{e.body}</li>)
                  }
              </ul>
              <hr/>
              <Link to={`/users/${this.state.user.id}`}>More post of author:{this.state.user.name}</Link>
            </div>
        )
    }
}
export default PostShow