import * as React from "react";

interface Skill {
  skillName: string;
  skillLevel: "beginner" | "intermediate" | "advanced";
}

const skillsData: Skill[] = [
  {
    skillName: "React.js",
    skillLevel: "advanced",
  },
  {
    skillName: ".NET",
    skillLevel: "intermediate",
  },
  {
    skillName: "JavaScript",
    skillLevel: "advanced",
  },
  {
    skillName: "SQL",
    skillLevel: "intermediate",
  },
  {
    skillName: "Front-End Development",
    skillLevel: "advanced",
  },
  {
    skillName: "Databases",
    skillLevel: "beginner",
  },
  {
    skillName: "Python",
    skillLevel: "beginner",
  },
  {
    skillName: "Business Management",
    skillLevel: "advanced",
  },
  {
    skillName: "Training & Development",
    skillLevel: "advanced",
  },
];

const AboutHeroSection: React.FC = () => {
  return (
    <section className="w-full h-[62.5vh] flex flex-row">
      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-#1F2937">
          Kirsten Bachert Darling
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`rounded-full px-3 py-1.5 text-white text-sm 
              ${
                skill.skillLevel === "advanced"
                  ? "bg-purple-700"
                  : skill.skillLevel === "intermediate"
                    ? "bg-purple-500"
                    : "bg-purple-300"
              }`}
            >
              {skill.skillName}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center pt-4">
          <div className="flex items-center mb-2">
            <div className="w-24 h-4 bg-gradient-to-r from-purple-300 to-purple-700"></div>
            <span className="ml-2 text-sm">Beginner to Advanced</span>
          </div>
          <div className="text-sm text-center">
            <p className="pb-2">
              <strong>Advanced:</strong> Handles solo projects and
              enterprise-level clients.
            </p>
            <p className="pb-2">
              <strong>Intermediate:</strong> Has completed beginner and
              intermediate-level courses, appreciates expert feedback, and has
              completed projects for small businesses or personal portfolios.
            </p>
            <p className="pb-2">
              <strong>Beginner:</strong> Has studied for 10 or fewer hours,
              understands the overview, and has dabbled in it for a quick
              weekend project. Can ramp up to client-ready in 30 days with prep.
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative">
        <img
          src="/redheadUnsplash.jpg"
          alt="Kirsten Bachert Darling"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default AboutHeroSection;
