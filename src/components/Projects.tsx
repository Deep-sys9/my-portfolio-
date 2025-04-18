
import { Github, ExternalLink, Code, Layout, FileCode } from "lucide-react";
import { useEffect } from "react";

// Project Type
type Project = {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  status: "completed" | "in-progress" | "planned";
};

const Projects = () => {
  // Define projects
  const projects: Project[] = [
    {
      name: "Age Category Checker",
      description: "A web application that determines a person's age category based on their birth date. Categories include child, teen, adult, and senior.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg",
      status: "completed",
    },
    {
      name: "Scooty AI",
      description: "An innovative concept for AI-powered scooter rental and management. Currently in planning and design phase.",
      technologies: ["Concept", "UI/UX Design"],
      image: "/placeholder.svg",
      status: "planned",
    },
    {
      name: "BMI Calculator",
      description: "A simple tool for calculating Body Mass Index with health recommendations based on the results.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      image: "/placeholder.svg",
      status: "in-progress",
    },
    {
      name: "Islamic Reminder App",
      description: "A prayer time reminder application with daily inspirational quotes and religious guidance.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg",
      status: "planned",
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

    const hiddenElements = document.querySelectorAll(".project-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Get status badge style based on project status
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "planned":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="section-container">
        <h2 className="section-title opacity-0 project-hidden">My Projects</h2>
        
        <p className="text-lg mb-12 max-w-3xl opacity-0 project-hidden">
          Here are some projects I&apos;ve worked on, am currently developing, or plan to build in the near future:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name} 
              className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow opacity-0 project-hidden"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="aspect-video bg-muted relative flex items-center justify-center">
                <Layout className="w-12 h-12 text-muted-foreground/50" />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getStatusBadge(project.status)}`}>
                    {project.status === "completed" ? "Completed" : 
                     project.status === "in-progress" ? "In Progress" : "Planned"}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                  )}
                  
                  {!project.github && !project.demo && (
                    <span className="flex items-center text-sm font-medium text-muted-foreground">
                      <FileCode className="w-4 h-4 mr-1" /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
