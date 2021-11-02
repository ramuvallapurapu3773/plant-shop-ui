import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';
import WelcomeComponent from'./components/WelcomeComponent';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
   
    <HeaderComponent/>
    <div className="container">
    <Switch>
    <Route path="/" exact component={WelcomeComponent}></Route>
    </Switch>
    </div>
     <FooterComponent/>
    
    </Router>

     
    </div>
  );
}

export default App;
