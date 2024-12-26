import About from './component/About';
import Contact from './component/Contact';
import Exprience from './component/Exprience';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Technology from './component/Technology';

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-50 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Exprience />
        <Projects />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
