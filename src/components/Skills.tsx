import { Code2, Palette, Layers, Figma, Smartphone, Sparkles, Zap, Database, Globe, Layout } from "lucide-react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      gradient: "from-teal-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: "Expert" },
        { name: "CSS3/SCSS", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: Layers,
      gradient: "from-blue-500 to-purple-500",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Framer Motion", level: "Intermediate" },
      ]
    },
    {
      category: "Design Tools",
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: "Expert" },
        { name: "Adobe XD", level: "Advanced" },
        { name: "Photoshop", level: "Intermediate" },
        { name: "Illustrator", level: "Intermediate" },
      ]
    },
    {
      category: "UI/UX Design",
      icon: Layout,
      gradient: "from-purple-500 to-indigo-500",
      skills: [
        { name: "User Research", level: "Advanced" },
        { name: "Wireframing", level: "Expert" },
        { name: "Prototyping", level: "Expert" },
        { name: "Design Systems", level: "Advanced" },
      ]
    },
    {
      category: "Responsive Design",
      icon: Smartphone,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Mobile-First Design", level: "Expert" },
        { name: "Cross-Browser Testing", level: "Advanced" },
        { name: "Accessibility (WCAG)", level: "Advanced" },
        { name: "Performance Optimization", level: "Advanced" },
      ]
    },
    {
      category: "Backend & Tools",
      icon: Database,
      gradient: "from-orange-500 to-amber-500",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Firebase", level: "Intermediate" },
      ]
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-teal-600 to-teal-700 text-white";
      case "Advanced":
        return "bg-gradient-to-r from-blue-600 to-blue-700 text-white";
      case "Intermediate":
        return "bg-gradient-to-r from-purple-600 to-purple-700 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-white via-teal-50/30 to-white">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-600 uppercase tracking-wider">My Expertise</span>
          <h2 className="text-4xl md:text-5xl mt-2 text-gray-900">Skills & Technologies</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-teal-400 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-gray-900">{category.category}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-gray-700">{skill.name}</span>
                    <Badge className={`${getLevelColor(skill.level)} border-0 shadow-sm`}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills badges section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl text-gray-900 mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Webpack", "Vite", "Redux", "GraphQL", "Jest", "Cypress",
              "Docker", "Vercel", "Netlify", "Supabase", "MongoDB", "PostgreSQL",
              "Responsive Images", "Web Animations", "SVG", "WebGL"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-teal-400 hover:bg-teal-50 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skill level legend */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-600 to-teal-700"></div>
            <span className="text-sm text-gray-600">Expert - 90%+ proficiency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <span className="text-sm text-gray-600">Advanced - 70-90% proficiency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700"></div>
            <span className="text-sm text-gray-600">Intermediate - 50-70% proficiency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
