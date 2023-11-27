import './app.scss'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallex from './components/parallex/Parallex'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Skill from './components/skills/Skils'


function App() {

  return (
    <>
      <section id='HomePage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Services'><Parallex type={'services'} /></section>
      <section id='PortFolio'><Services/></section>
      <section id='Services'><Parallex type={'portfolio'} /></section>
      <Portfolio/>

      <section id='Contact'><Contact/></section>
      <section id='About'>
      ABOUT
      </section>
     
    </>
  )
}

export default App
