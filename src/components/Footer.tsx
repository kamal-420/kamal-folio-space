import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-royal py-8 border-t border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-foreground/80 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            © {new Date().getFullYear()} Kamalesh S. All rights reserved.
            <Sparkles className="h-4 w-4 text-accent" />
          </p>
          <p className="text-accent text-sm mt-2 font-medium">
            Built with passion and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};
