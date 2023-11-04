import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Projects from './components/Projects';
import TestProject from './components/TestProject';
import Topbar from './components/Topbar';




function App() {
  return (
    <div className='app'>
      <Topbar />
      <Home />
      <AboutMe />
      <TestProject />
      <ContactMe />
    </div>

  );
}

export default App;
