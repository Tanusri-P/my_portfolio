import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "from-gray-700 to-gray-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "from-sky-500 to-blue-500",
    },
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-white via-teal-50/30 to-white">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-600 uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl mt-2 text-gray-900">Let's Collaborate!</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-900">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-50 border-gray-200 focus:border-teal-500 transition-colors text-gray-900"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-50 border-gray-200 focus:border-teal-500 transition-colors text-gray-900"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-50 border-gray-200 focus:border-teal-500 transition-colors min-h-[150px] resize-none text-gray-900"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Social links and info */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <h3 className="text-2xl mb-6 text-gray-900">Connect With Me</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of these platforms. I'm always excited to discuss new opportunities and collaborate on interesting projects.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                        <social.icon className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional info card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-purple-50 border border-teal-200 shadow-lg">
              <h3 className="text-xl mb-3 text-gray-900">Available for Freelance</h3>
              <p className="text-gray-700">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's create something extraordinary together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
