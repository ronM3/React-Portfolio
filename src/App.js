import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { Skills } from "./components/Skills";
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollTopButton />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
