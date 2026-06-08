import { Introduction } from './components/Introduction/Introduction';
import { NavBar } from './components/Navbar/NavBar';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <div className="min-h-screen bg-[#11071F]">
      <NavBar />
      <div className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">
        <Introduction />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
