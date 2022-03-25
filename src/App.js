import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (//dentro de router eu consigo definir as views (rotas e os componentes padrão que vao ser repetidos)
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        <Route path="/empresa" element={<Empresa/>}></Route>
      </Routes>
      <Footer/>

    </Router>
    
  )
}

export default App
