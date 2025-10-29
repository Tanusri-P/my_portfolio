import { Award, Trophy, FileText, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      year: "2024",
      title: "First Place - National Hackathon",
      description: "Won first place in the National Web Development Challenge with an innovative AI-powered design tool.",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2024",
      title: "Published Research Paper",
      description: "\"Modern Approaches to Responsive Web Design\" published in the Journal of Web Technologies.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2023",
      title: "UI/UX Design Award",
      description: "Received recognition for outstanding interface design at the Design Excellence Awards.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2023",
      title: "Featured Developer",
      description: "Featured on Dev.to's 'Developers to Watch' list for innovative web solutions and tutorials.",
      icon: Star,
      color: "from-teal-500 to-green-500",
    },
    {
      year: "2023",
      title: "Hackathon Runner-up",
      description: "Second place in the Regional Innovation Challenge for creating a collaborative design platform.",
      icon: Trophy,
      color: "from-orange-500 to-red-500",
    },
    {
      year: "2022",
      title: "Published Article",
      description: "\"Building Accessible Web Applications\" - A comprehensive guide published on Medium with 10k+ reads.",
      icon: FileText,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-white via-purple-50/30 to-white">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-600 uppercase tracking-wider">Recognition</span>
          <h2 className="text-4xl md:text-5xl mt-2 text-gray-900">Achievements & Publications</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Milestones that showcase dedication to excellence in web design and development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-purple-400 to-teal-400"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-teal-400 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                          <achievement.icon className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 text-sm bg-gradient-to-r ${achievement.color} text-white rounded-full`}>
                            {achievement.year}
                          </span>
                        </div>
                        <h3 className="text-xl mb-2 text-gray-900">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 transform -translate-x-1/2 shadow-lg shadow-teal-500/30 ring-4 ring-white"></div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
