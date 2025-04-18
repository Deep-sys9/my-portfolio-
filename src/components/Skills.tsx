
import { Code, Server, GitBranch, Globe, Shield, Database } from "lucide-react";
import { useEffect } from "react";

// Skill progress type
type SkillProgress = {
  name: string;
  level: number;
  icon: JSX.Element;
  description: string;
};

const Skills = () => {
  // Define skills with progress
  const skills: SkillProgress[] = [
    {
      name: "HTML5 & CSS3",
      level: 80,
      icon: <Code className="w-6 h-6" />,
      description: "Building structured, semantic markup and stylish, responsive designs",
    },
    {
      name: "JavaScript",
      level: 65,
      icon: <Code className="w-6 h-6" />,
      description: "Creating dynamic, interactive web experiences",
    },
    {
      name: "Git & GitHub",
      level: 75,
      icon: <GitBranch className="w-6 h-6" />,
      description: "Version control and collaborative development",
    },
    {
      name: "Kali Linux",
      level: 60,
      icon: <Shield className="w-6 h-6" />,
      description: "Basic cybersecurity tools and penetration testing",
    },
    {
      name: "Web Hosting",
      level: 70,
      icon: <Globe className="w-6 h-6" />,
      description: "Deploying sites with GitHub Pages and other platforms",
    },
    {
      name: "Learning Next",
      level: 30,
      icon: <Database className="w-6 h-6" />,
      description: "React, Flask, APIs, and more advanced technologies",
    },
  ];

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

    const hiddenElements = document.querySelectorAll(".skill-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title opacity-0 skill-hidden">My Skills</h2>
        
        <p className="text-lg mb-12 max-w-3xl opacity-0 skill-hidden">
          I continuously improve my technical abilities through hands-on projects and learning new technologies. Here are some key skills I&apos;ve developed so far:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-card p-6 rounded-lg shadow-sm border flex flex-col opacity-0 skill-hidden"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 text-primary rounded-md mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {skill.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex justify-between mb-1 text-sm">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary"
                    style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
