import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Redux Toolkit", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },
  { name: "TypeScript", level: 40, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "REST API", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "MongoDB Atlas", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtered skills
  const filteredSkills =
    activeCategory === "all"
      ? categories.filter((c) => c !== "all") // show all category groups
      : [activeCategory]; // show only one group

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer backdrop-blur-md border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md border-primary/60"
                  : "bg-background/40 text-foreground hover:bg-background/60 border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Glassmorphism Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((category) => {
            const categorySkills = skills.filter(
              (s) => s.category === category
            );

            return (
              <div
                key={category}
                className="rounded-2xl p-6 backdrop-blur-md bg-background/30 border border-border shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold mb-5 capitalize text-primary tracking-wide">
                  {category} 
                </h3>

                <div className="space-y-5">
                  {categorySkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-md font-medium tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-s text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary/40 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-cyan-400 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                          style={{ width: skill.level + "%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
