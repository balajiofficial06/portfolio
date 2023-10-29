import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Topbar from './components/Topbar';


function App() {
  return (
    <div className='app'>
      <Topbar />
      <Home />
      <AboutMe />
    </div>

  );
}

export default App;
