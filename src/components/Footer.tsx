
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="flex items-center justify-center text-muted-foreground mb-2">
          Built with <Heart className="w-4 h-4 mx-1 text-primary" /> by Sk Fojlul Haque
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
