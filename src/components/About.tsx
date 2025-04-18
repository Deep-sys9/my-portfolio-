
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const hiddenElements = document.querySelectorAll(".about-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="section-container">
        <h2 className="section-title opacity-0 about-hidden">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg opacity-0 about-hidden">
              I&apos;m <span className="font-bold">Sk Fojlul Haque</span>, an aspiring web developer and cybersecurity enthusiast with a passion for building secure and beautiful web applications.
            </p>
            
            <div className="opacity-0 about-hidden">
              <h3 className="text-xl font-semibold mb-2">My Journey</h3>
              <p>
                My tech journey began with curiosity about how websites work. I started learning HTML and CSS, then gradually expanded my skills to include JavaScript and more advanced technologies. Along the way, I developed an interest in cybersecurity, particularly in understanding how to build secure applications.
              </p>
            </div>
            
            <div className="opacity-0 about-hidden">
              <h3 className="text-xl font-semibold mb-2">My Goals</h3>
              <p>
                I aim to build a career in full-stack development with a focus on security. My immediate goals include mastering React and backend technologies, securing freelance opportunities to support my family, and continuously expanding my knowledge in emerging technologies.
              </p>
            </div>
            
            <div className="opacity-0 about-hidden">
              <h3 className="text-xl font-semibold mb-2">Currently Learning</h3>
              <p>
                I&apos;m currently focused on deepening my JavaScript knowledge, exploring Linux environments, and building practical projects that solve real problems. My next learning targets include React, Flask, and RESTful APIs.
              </p>
            </div>
          </div>
          
          {/* Right Column - Illustration or Decorative Element */}
          <div className="relative flex justify-center opacity-0 about-hidden">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <div className="absolute inset-3 bg-background rounded-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Tech Enthusiast</h3>
                  <p className="text-muted-foreground">
                    Coding, Learning, Building
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
