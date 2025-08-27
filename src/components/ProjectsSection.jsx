import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Taskify",
    description:
      "A real-time task management app featuring workspaces, role-based access, and group chat for seamless collaboration.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSocket",
      "Redux Toolkit",
      "Material UI",
    ],
    demoUrl: "https://taskifyteam.netlify.app/",
    githubUrl: "https://github.com/Pooja-so/Taskify",
  },
  {
    id: 2,
    title: "Career Orbit AI",
    description:
      "An AI-powered career platform offering personalized insights, dynamic mock interviews, and a smart resume builder.",
    image: "/projects/project2.png",
    tags: [
      "Next.js",
      "Gemini AI API",
      "PostgreSQL",
      "Clerk",
      "Inngest",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    demoUrl: "https://career-orbit-ai-ulcy.vercel.app/",
    githubUrl: "https://github.com/Pooja-so/Career-Orbit-AI",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center tracking-tight">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-base italic md:text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          Explore my latest projects thoughtfully crafted with performance,
          clean design, and a seamless user experience in mind.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-white/10 
              backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs md:text-sm font-medium border border-white/20 rounded-full 
                      bg-white/10 text-white/90 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-cyan-400 tracking-wide">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-center items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-sm md:text-base font-medium px-6 py-3 
            rounded-full bg-gradient-to-r from-primary/90 to-primary text-white shadow-lg hover:shadow-primary/50 transition-all duration-300"
            target="_blank"
            href="https://github.com/Pooja-so"
          >
            Check My GitHub <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
