import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import Auth from '../hoc/auth';
import NavBar from './views/NavBar/NavBar';
import Footer from "./views/Footer/Footer";
import VideoUploadPage from "./views/VideoUploadPage/VideoUploadPage";



function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  const AuthVideoUploadPage = Auth(VideoUploadPage, true);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element = {<AuthLandingPage />} />
        <Route exact path="/login" element = {<AuthLoginPage/>} />
        <Route exact path="/register" element = {<AuthRegisterPage/>} />
        <Route exact path="/video/upload" element = {<AuthVideoUploadPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;