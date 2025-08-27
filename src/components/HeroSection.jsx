import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Spinning UFO */}
      <img
        src="/ufo.png"
        alt="UFO"
        className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 opacity-0"
        style={{
          animation: "ufo-approach 6s ease-out forwards",
        }}
      />

      {/* Content */}
      <div className="container max-w-5xl mx-auto z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block opacity-0 animate-fade-in">
            Hola, I&apos;m <span className="text-primary">Pooja</span>
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 opacity-0 animate-fade-in-delay-1">
            Frontend Developer
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-2">
          I craft responsive, user-focused web applications with modern design
          and seamless functionality — blending creativity with performance.
        </p>

        <div className="mt-8 opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
          <a
            href="#projects"
            className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-medium shadow-lg
    transition-transform duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]"
          >
            Explore My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-80">
        <span className="text-lg text-white font-medium mb-2 tracking-wide">
          Scroll Down
        </span>
        <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
      </div>
    </section>
  );
};
