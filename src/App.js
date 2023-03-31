
/* COMPONENTES DE LAS OPCIONES*/
import Container from './components/Container'
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



import './styles/style.css'
import './App.css';

function App() {

  return (
      
      <Container>
        <Home></Home>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Education></Education>
        <Contact></Contact>
      </Container>
  );
}

export default App;
