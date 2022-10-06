import Navbar from './components/Navbar';
import Content from './components/Content'
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Name from './pages/Name'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Techstack from './pages/Techstack'

import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  const styles = {
    container: {
      'height': '100%'
    }
  }

  return (
    <div className="App flex flex-row" style={styles.container}>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/name" />} />
        <Route path="/name" element={<Name/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/exp" element={<Experience/>} />
        <Route path="/tech-stack" element={<Techstack/>} />
      </Routes>
    </div>
  )
}

export default App;
