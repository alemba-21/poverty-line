import {Routes, Route} from "react-router-dom";
import Jobs from "./Links/Jobs";
import JobDetails from "./Links/JobDetails";
import Apply from "./Links/Application";
import Home from "./Links/Home"
import Profile from "./Links/Profile";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Profile />} />
        <Route path="/Jobs" element={<Jobs/>}/>
        <Route path="/Details" element={<JobDetails/>}/>
        <Route path="/Apply" element={<Apply/>}/>
      </Routes>

  );
}

export default App;