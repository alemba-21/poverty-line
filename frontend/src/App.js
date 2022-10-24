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
  );
}

export default App;