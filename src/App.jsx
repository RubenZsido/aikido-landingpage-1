
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
  <Routes>
    <Route path="/1" element={<PageOne />} />
    <Route path="/2" element={<div />} />
    <Route path="/3" element={<div />} />
  </Routes>
)
}

export default App
