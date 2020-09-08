import React, { Component } from 'react'
import { Link , Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import UserList from './components/UserList'
import PostList from './components/PostList'
import UserShow from './components/UserShow'
import PostShow from './components/PostShow'

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Link to='/'>Home</Link> | 
     <Link to='/users'>Users</Link> |
     <Link to='/posts'>Posts</Link>

     <Route path='/' component={Home} exact={true}/>
     <Route path='/users' component={UserList} exact={true}/>
     <Route path='/users/:id' component={UserShow}/>
     <Route path='/posts' component={PostList} exact={true}/>
     <Route path='/posts/:id' component={PostShow}/>
     </BrowserRouter>
    )
  }
}
export default App