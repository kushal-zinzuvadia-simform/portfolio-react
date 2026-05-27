import { Introduction } from './components/Introduction/Introduction';
import { NavBar } from './components/Navbar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="bg-[#11071F] px-115">
        <Introduction />
      </div>
    </div>
  );
}

export default App;
