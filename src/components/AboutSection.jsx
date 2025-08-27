import { Notebook, Layers, Code2 } from "lucide-react";

export const AboutSection = () => {
  // ✅ Array of content
  const aboutItems = [
    {
      icon: <Code2 className="h-7 w-7 text-primary mb-3" />,
      title: "Frontend Development",
      description:
        "I specialize in creating responsive and modern interfaces using React and other web technologies.",
    },
    {
      icon: <Layers className="h-7 w-7 text-primary mb-3" />,
      title: "Full-Stack Development",
      description:
        "I am skilled in the MERN stack and capable of developing end-to-end web applications.",
    },
    {
      icon: <Notebook className="h-7 w-7 text-primary mb-3" />,
      title: "Structured Notes Making",
      description:
        "I enjoy simplifying complex technical concepts into structured notes that make learning easier and more effective.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Render Cards with map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {aboutItems.map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform hover:bg-white/10  duration-500"
            >
              {item.icon}
              <h4 className="font-semibold text-lg mb-2 text-cyan-300">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-md tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
