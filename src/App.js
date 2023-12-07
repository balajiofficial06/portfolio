import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Skills from './components/Skills';
import TestProject from './components/TestProject';
import Topbar from './components/Topbar';




function App() {
  return (
    <div className='app'>
      <Topbar />
      <Home />
      <AboutMe />
      <Skills />
      <TestProject />
      <ContactMe />
    </div>

  );
}

export default App;
