import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { Skills } from "./components/Skills";
import { NavBar } from './components/NavBar';
import { useRef } from "react";

function App() {
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const refs = {
    projectsRef, contactsRef, homeRef, skillsRef
  }

  return (
    <div className="App">
      <NavBar ref={refs}/>
      <ScrollTopButton />
      <Header ref={homeRef}/>
      <Skills ref={skillsRef}/>
      <Projects ref={projectsRef} />
      <Footer ref={contactsRef}/>
    </div>
  );
}

export default App;
