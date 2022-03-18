import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import Saldo from "./containers/Saldo";
import Transfer from "./containers/Transfer";
import TopUp from "./containers/TopUp";
import History from "./containers/History";
import Error from "./containers/Error";
import EditProfile from "./containers/EditProfile";
import ComingSoon from "./containers/ComingSoon";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/comingsoon" component={ComingSoon} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/logout" component={Logout} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/saldo" component={Saldo} exact />
          <Route path="/transfer" component={Transfer} exact />
          <Route path="/topup" component={TopUp} exact />
          <Route path="/history" component={History} exact />
          <Route path="/error" component={Error} exact />
          <Route path="/editprofile" component={EditProfile} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

