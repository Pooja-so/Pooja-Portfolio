import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = 25; // only a few stars
    const colors = ["#ffffff", "#ffd27f", "#b5d3ff", "#f0b3ff"];

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.4,
        animationDuration: Math.random() * 2 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 3; // just a few meteors
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 8,
        animationDuration: Math.random() * 3 + 4,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* ⭐ Few glowing stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 8}px ${star.color}`,
            animation: `star-flicker ${star.animationDuration}s infinite alternate`,
          }}
        />
      ))}

      {/* ☄️ Infinite meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute"
          style={{
            width: meteor.size * 80 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            background:
              "linear-gradient(90deg, rgba(0,246,255,1), rgba(0,246,255,0.6), transparent)",
            borderRadius: "2px",
            filter: "drop-shadow(0 0 8px #00f6ff)",
            transform: "rotate(-20deg)",
            animation: `meteor-shoot ${meteor.animationDuration}s linear infinite`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes star-flicker {
          from { opacity: 0.5; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1.1); }
        }

        @keyframes meteor-shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(-20deg);
            opacity: 1;
          }
          70% { opacity: 1; }
          100% {
            transform: translateX(-900px) translateY(500px) rotate(-20deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
