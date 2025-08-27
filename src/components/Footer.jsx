import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border relative">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center">
        <p className="text-md text-muted-foreground">
          <span className="text-lg"> &copy;</span> {new Date().getFullYear()} Pooja. All rights reserved.
        </p>

        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
