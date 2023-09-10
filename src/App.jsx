import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
