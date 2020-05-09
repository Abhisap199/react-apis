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
     <Link to='/home'>Home</Link> | 
     <Link to='/userlist'>Users</Link> |
     <Link to='/postlist'>Posts</Link>

     <Route path='/' component={Home} exact={true}/>
     <Route path='/userlist' component={UserList} exact={true}/>
     <Route path='/userlist/:id' component={UserShow}/>
     <Route path='/postlist' component={PostList} exact={true}/>
     <Route path='/postlist/:id' component={PostShow}/>
     </BrowserRouter>
    )
  }
}
export default App