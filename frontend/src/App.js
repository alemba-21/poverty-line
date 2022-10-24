<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Footer from "./components/Footer";
import ProfileCreation from "./components/profile/ProfileCreation";
import Createjob from "./components/Createjob";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Subscribe />
      <About />
      <Footer />
      <Createjob />
     <ProfileCreation /> 
    </>
=======
import {Routes, Route} from "react-router-dom";
import Jobs from "./Links/Jobs";
import JobDetails from "./Links/JobDetails";
import Apply from "./Links/Application";
import Home from "./Links/Home"
import Profile from "./Links/Profile";
import SignIn from "./Links/SignIn";
import SignedUp from "./Links/SignedUp";
import About from "./Links/About";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/signed" element={<SignedUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/create" element={<Profile />} />
        <Route path="/Jobs" element={<Jobs/>}/>
        <Route path="/Details" element={<JobDetails/>}/>
        <Route path="/Apply" element={<Apply/>}/>
      </Routes>

>>>>>>> 8b3c288e874aa3250e406763d070a49caec514e5
  );
}

export default App;