import { useState } from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  const [mode, setMode]  = useState('light')

  const toggleMode = () => {
      if(mode === 'light'){
          setMode('dark')
          document.body.classList.remove('light')
          document.body.classList.add('dark')
      }
      else{
        setMode('light')
        document.body.classList.remove('dark')
        document.body.classList.add('light')
      }
  }

  return (
    <>
      <Router> 
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />   
        <Routes>
          <Route exact path='/' element={<TextForm heading='Enter text to Analysis Below' />} />
          <Route exact path='/about' element={<About aboutTitle="About"/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
