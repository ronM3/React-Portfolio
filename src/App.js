import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ScrollTopButton } from './components/ScrollTopButton';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
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
