/* Components */
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden dark:bg-siteWhite">
      <Header />
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;