import Dashboard from './admin'
import ForgotPassword from './ForgotPassword'
// import UpdateProfile from './UpdateProfile'
import Container  from '@material-ui/core/Container'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Navbar from './components/Navbar'
import Home from './Home';
import Signup from './Signup';
import PublicRoute from './PublicRoute'

function App() {
  return (
    <Container>
       <Router>
       <Navbar/> 
       <AuthProvider>
         <Switch>
            <PublicRoute restricted={false} exact path="/" component={ Home } />
             <PrivateRoute exact path="/dashboard" component={ Dashboard } />
             <PrivateRoute exact path="/update-profile"  />
            <PublicRoute restricted={true} exact path="/forgot-password" component={ ForgotPassword}  />
         </Switch>
       </AuthProvider>
       </Router>
    </Container>

  );
}

export default App;
