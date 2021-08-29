import './FontAwesomeIcons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  {Login}  from './components/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import  {Registration}  from './components/Registration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ResetPassword from './components/ResetPassword';
library.add(faUser, faEnvelope, faLock)
function App() {
  return (

    <Router>
      <div className="container-fluid">
        <header className="row">
          <div className="col-sm-12 bg-success">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Home </a>
                  </li>


                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/registration">Registration</a>
                  </li>

                </ul>

              </div>
            </nav>

          </div>

        </header>
        <main className="row">
          <div className="col-sm-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route excat path="/registration" component={Registration} />
              <Route exact path="/resetpassword" component={ResetPassword} />


            </Switch>

          </div>

        </main>
        <footer className="row">
          <div className="col-sm-12 bg-warning ">



          </div>

        </footer>


      </div>


      <div className="App">
      </div>
    </Router>

  );
}

export default App;
