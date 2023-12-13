import logo from './logo.svg';
import './App.css';
import Contact from './Component/Contact'
import About from './Component/About'
import Main from './Component/Main'



import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />

      </Routes>

    </Router>
    </>
  );
}

export default App;

