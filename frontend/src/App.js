import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
// import About from "./components/About";
// import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

import {Routes, Route} from "react-router-dom";
import JobListing_page from "./components/Job/JobListing_page";
import Details from "./components/Job/JobDetails_page";
import Apply from "./components/Job/Application_page";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Subscribe />
      <Footer />
    
      <Routes>
          <Route path="/Jobs" element={<JobListing_page/>}/>
          <Route path="/Details" element={<Details/>}/>
          <Route path="/Apply" element={<Apply/>}/>
      </Routes>

    </>
  );
}

export default App;