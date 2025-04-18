
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="container mx-auto text-center px-6 z-10">
        <p className="text-lg md:text-xl mb-4 opacity-0 animate-fade-in animate-delay-100">
          Hi, I&apos;m
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-200">
          Sk Fojlul Haque
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground opacity-0 animate-fade-in animate-delay-300">
          Aspiring Full-Stack Web Developer | Cybersecurity Enthusiast
        </p>
        
        <div className="opacity-0 animate-fade-in animate-delay-400">
          <button
            onClick={scrollToAbout}
            className="bg-primary text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all"
          >
            Get to Know Me
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in animate-delay-500"
        onClick={scrollToAbout}
      >
        <ArrowDown className="cursor-pointer" />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
