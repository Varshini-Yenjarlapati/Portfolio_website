import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SkillsWork from "./pages/Skills_Work";
import Homes from "./pages/Homes";
import About from "./pages/About";
import FixedSocials from "./components/FixedSocials";

function App() {
  return (
    <div className="bg-[#86A69D] overflow-x-hidden min-h-screen transition-colors duration-500">
    <FixedSocials />


      <div className="w-full overflow-x-hidden">
      <Navbar />
      <main className="pt-24">
        <Homes />
        <Projects />
        <SkillsWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default App;
