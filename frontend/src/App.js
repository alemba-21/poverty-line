import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
// import About from "./components/About";
// import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Subscribe />
      <Footer />
    
      <Routes>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Routes>

    </>
  );
}

export default App;