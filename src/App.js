import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, RandomGen, SearchResults } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<SearchResults/>}/>
        <Route path='/' element={<RandomGen/>}/>
      </Routes>
    </Router>    
  );
}

export default App;
