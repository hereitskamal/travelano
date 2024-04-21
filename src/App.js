// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Body from './Components/Body';
import LoginPage from "./Components/Components/LoginSignupComponents/LoginPage";
import SignUpPage from "./Components/Components/LoginSignupComponents/SignUpPage";
import SignInWithPhone from "./Components/Components/LoginSignupComponents/SignInWithPhone";
import GroupTourEventForm from "./Components/Components/HomePageComponents/GroupTourEventForm";
import AboutUs from './Components/Body/AboutUs';
import Package from './Components/Body/Package';
import ContactUs from './Components/ContatcUs';
import AdminDashbord from './Components/Admin/AdminDashbord';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/SignInWithPhone" element={<SignInWithPhone />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/adminDashboard" element={<AdminDashbord/>} />
        <Route path="/package" element={<Package />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/addGroupTour" element={<GroupTourEventForm />} />
      </Routes>
    </Router>
  );
}

export default App;
