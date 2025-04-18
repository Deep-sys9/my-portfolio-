
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold text-primary"
        >
          Fojlul
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("home")} 
            className="font-medium hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("skills")} 
            className="font-medium hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection("projects")} 
            className="font-medium hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="font-medium hover:text-primary transition-colors"
          >
            Contact
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <div className="flex flex-col items-center justify-center space-y-8 h-full">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-xl font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-xl font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("skills")} 
            className="text-xl font-medium"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection("projects")} 
            className="text-xl font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="text-xl font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
