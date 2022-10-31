import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Jobs from "./Links/Jobs";
import Home from "./Links/Home"
import Profile from "./Links/Profile";
import SignIn from "./Links/SignIn";
import SignedUp from "./Links/SignedUp";
import About from "./Links/About";
import ProfView from './Links/ProfView'
import React from "react";
import Message from "./Links/Message";
import ApplyJob from './Links/ApplyJob';
import User from './Links/User';
import Createjob from './Links/Createjob'
import Navbar from './components/Navbar'
import Admin from './Links/Admin';



function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ProfView />} />
        <Route path="/UserDashboard" element={<User />} />
        <Route path="/about" element={<About />}/>
        <Route path="/chat" element={<Message />} />
        <Route path="/signed" element={<SignedUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/create" element={<Profile />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/post" element={<Createjob />} />
        <Route path="/Jobs" element={<Jobs/>}/>
        {/* <Route path="/Details" element={<JobDetails/>}/> */}
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
      
      

  );
}

export default App;