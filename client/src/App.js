import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import NavBar from './components/views/NavBar/NavBar';

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element = {<AuthLandingPage />} />
        <Route exact path="/login" element = {<AuthLoginPage/>} />
        <Route exact path="/register" element = {<AuthRegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;