import './assets/styles/App.css'
import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'
import { TechnologiesAndSkills } from './components/TechnologiesAndSkills'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Technologies />
      <TechnologiesAndSkills />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App
