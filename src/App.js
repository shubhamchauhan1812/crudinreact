import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  // Correct import
//import ReactDOM from "react-dom";
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm';
import Login from './components/Login';
import LoginBootstrap from './components/LoginBootstrap';
import ListData from './components/ListData';
import AboutUs from './components/AboutUs';
import Test from './components/Test';
import NotFound from './NotFound';
// import LoginModalPopup from './components/LoginModalPopup'; // Ensure the correct path
import Footer from './components/Footer';


function App() {
  //console.log(Header,RegistrationForm, Login, ListData, AboutUs, Test, NotFound);
  return (

    <Router>


      <Routes>
        <Route path="/" element={<LoginBootstrap />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/*" element={<Layout />} />
      </Routes>

    </Router>

  );
}

function Layout() {
  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* <Router> */}
      <Header />
      <div style={{ paddingBottom: '50px' }}> {/* Adjust for footer height */}
        <Routes>
          <Route path="/registrationForm" element={<registrationForm />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/loginBootstrap" element={<LoginBootstrap />} /> */}
          <Route path="/listData" element={<ListData />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/test" element={<Test />} />
          
          {/* <Route path="/*" element={<Navigate to="/" />} />  used for Redirect to Home Page If i type invalid route */}
          {/* <Route path="/loginModalPopup" element={<LoginModalPopup />} /> */}

        </Routes>
      </div>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
