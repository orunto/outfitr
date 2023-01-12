import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, RandomGen, SearchResult } from './pages';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchResult/>}/>
          <Route path='/random' element={<RandomGen/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </Router>    
    )
  );
}

export default App;
