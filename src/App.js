import Home from './Home'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Navbar from './components/Navbar'
function App() {
  return (
    <Container
      className=""
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
       <AuthProvider>
         <Switch>
            <Route exact path="/" component={ Home } />
            <PrivateRoute exact path="/dashboard" component={ Dashboard } />
            <PrivateRoute exact path="/update-profile" component={ UpdateProfile } />
            {/* <Route exact path="/signup" component={ Signup } /> */}
            {/* <Route exact path="/login" component={ Login } /> */}
            <Route exact path="/forgot-password" component={ ForgotPassword } />
         </Switch>
       </AuthProvider>
       </Router>
      </div>
    </Container>

  );
}

export default App;
