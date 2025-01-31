import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <section id="home">
          <Intro />
        </section>
        <Skills />
        <section id="projects">
          <Projects />
        </section>
        <section id="work">
          <Work />
        </section>
      </Container>
    </>
  );
}

export default App;
