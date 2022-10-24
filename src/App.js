import './App.css';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
        < NavBar/>
        <Header/>
        <Skills/>
        <Projects/>
    </div>
  );
}

export default App;
