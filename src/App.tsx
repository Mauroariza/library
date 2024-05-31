import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import './App.css'

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<BookPage />} />
      </Routes>
    </Router>
   
  )
}

export default App
