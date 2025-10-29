import { GraduationCap, Briefcase, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science student passionate about web technologies and design systems.",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "2+ years creating modern web applications and designing intuitive user interfaces.",
    },
    {
      icon: Target,
      title: "Goals",
      description: "Aspiring to lead innovative projects that merge creativity with cutting-edge technology.",
    },
  ];

  return (
    <section className="py-20 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-600 uppercase tracking-wider">Get to know me</span>
          <h2 className="text-4xl md:text-5xl mt-2 text-gray-900">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm a creative web designer and developer with a passion for building beautiful, 
              functional digital experiences. I specialize in creating user-centric designs that 
              not only look great but also solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the 
              internet, and has evolved into a deep commitment to crafting experiences that delight users 
              and drive business results. I believe in continuous learning and staying updated with the 
              latest design trends and technologies.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-teal-50/30 border border-gray-200 hover:border-teal-400 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzYxNTk5MjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
