import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, RandomGen, SearchResult } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchResult/>}/>
        <Route path='/random' element={<RandomGen/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </Router>    
  );
}

export default App;
