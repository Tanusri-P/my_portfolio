import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-to-b from-teal-50/50 to-white">
      {/* Background gradient effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1570170609489-43197f518df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3NjE2NTY0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-teal-500/40 shadow-2xl"
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/40 rounded-full mb-4">
              <span className="text-teal-600">Available for work</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                [Your Name]
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl text-gray-700">
              Web Designer & Developer
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Crafting modern, functional, and creative digital experiences that combine aesthetic excellence with seamless user interactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 group"
              >
                View My Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-purple-600/60 text-purple-700 hover:bg-purple-50 hover:border-purple-600 transition-all duration-300 group"
              >
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
