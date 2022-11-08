import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
// import { NavBar } from './components/NavBar';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ScrollTopButton } from './components/ScrollTopButton';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
        {/* < NavBar/> */}
      <Navbar/>
        <ScrollTopButton/>
        <Header/>
        <Skills/>
        
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
