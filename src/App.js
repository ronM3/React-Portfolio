import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { Skills } from "./components/Skills";
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ScrollTopButton />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
