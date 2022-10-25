import {Routes, Route} from "react-router-dom";
import Jobs from "./Links/Jobs";
import JobDetails from "./Links/JobDetails";
import Home from "./Links/Home"
import Profile from "./Links/Profile";
import SignIn from "./Links/SignIn";
import SignedUp from "./Links/SignedUp";
import About from "./Links/About";
import ProfileView from './components/profile/ProfileView'

function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ProfileView />} />
        <Route path="/About" element={<About />}/>
        <Route path="/signed" element={<SignedUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/create" element={<Profile />} />
        <Route path="/Jobs" element={<Jobs/>}/>
        <Route path="/Details" element={<JobDetails/>}/>
      </Routes>

  );
}

export default App;