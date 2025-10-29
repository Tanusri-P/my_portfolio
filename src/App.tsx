import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Main content */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
