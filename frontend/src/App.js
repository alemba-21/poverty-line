import {Routes, Route} from "react-router-dom";
import Jobs from "./Links/Jobs";
import Home from "./Links/Home"
import Profile from "./Links/Profile";
import SignIn from "./Links/SignIn";
import SignedUp from "./Links/SignedUp";
import About from "./Links/About";
import ProfView from './Links/ProfView'
import React from "react";
import Message from "./Links/Message";
import ApplyJob from './Links/ApplyJob'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ProfView />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Chat" element={<Message />} />
        <Route path="/signed" element={<SignedUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/create" element={<Profile />} />
        <Route path="/Apply" element={<ApplyJob />} />
        <Route path="/Jobs" element={<Jobs/>}/>
        {/* <Route path="/Details" element={<JobDetails/>}/> */}
      </Routes>
      

  );
}

export default App;