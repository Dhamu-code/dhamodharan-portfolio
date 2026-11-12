import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro/intro";
import Domain from "./components/domain/domain";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Client from "./components/client/client";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./portfolio.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Domain />
        <Skills />
        <Projects />
        <Client />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
