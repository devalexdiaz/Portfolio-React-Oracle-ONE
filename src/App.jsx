import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { DarkModeProvider } from "./components/darkMode/DarkModeContext"
import PageLoader from './components/loader/PageLoader'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Formacion from './components/formacion/Formacion'
import Proyectos from './components/proyectos/Proyectos'

export default function App() {

  return (
      <DarkModeProvider>
        <Router>
          <Menu />
          <PageLoader />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/formacion" element={<Formacion />}></Route>
            <Route path="/proyectos" element={<Proyectos />}></Route>
          </Routes> 
          <Footer />
        </Router>
      </DarkModeProvider>
  )
}
