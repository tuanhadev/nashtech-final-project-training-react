import './App.css';
import ViewDetail from './components/viewDetail';
import ListPost from './components/listPost';
import Login from './components/login';
import ViewProfile from './components/viewProfile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Router>
      <div className="main">
        <ul className="nav-bar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {localStorage.getItem("email") ? <li><button onClick={logout}>Logout</button></li> : <li><Link to="/login">Login</Link></li>}
        </ul>
        <h2 className="main-header">React Fundamentals Final Assignment</h2>
        <div>
          <Route exact path='/posts/:id' component={ViewDetail} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/posts' component={ListPost} />
        </div>
        <div>
          <Route exact path='/profile' component={ViewProfile} />
        </div>

        <Route path='/login' component={Login} />
      </div>
    </Router>
  );
}

export default App;
