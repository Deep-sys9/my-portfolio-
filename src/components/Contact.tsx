
import { Mail, Github, MessageSquare } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
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

    const hiddenElements = document.querySelectorAll(".contact-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title opacity-0 contact-hidden">Get In Touch</h2>
        
        <p className="text-lg mb-12 max-w-3xl opacity-0 contact-hidden">
          I&apos;m always interested in new opportunities, collaborations, or just a friendly chat about technology. Feel free to reach out through any of the following channels:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <a 
            href="mailto:example@gmail.com" 
            className="bg-card p-6 rounded-lg border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow opacity-0 contact-hidden"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">example@gmail.com</p>
          </a>
          
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow opacity-0 contact-hidden animate-delay-100"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground">github.com/username</p>
          </a>
          
          <a 
            href="https://telegram.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-lg border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow opacity-0 contact-hidden animate-delay-200"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Telegram</h3>
            <p className="text-muted-foreground">t.me/username</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
