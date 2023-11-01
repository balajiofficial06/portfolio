import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Projects from './components/Projects';
import Topbar from './components/Topbar';



function App() {
  return (
    <div className='app'>
      <Topbar />
      <Home />
      <AboutMe />
      <Projects />
    </div>

  );
}

export default App;
