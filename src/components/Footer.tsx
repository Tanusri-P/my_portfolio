import { Heart, Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              [Your Name]
            </h3>
            <p className="text-gray-600 mt-1">Web Designer & Developer</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:border-teal-400 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-110 group"
              >
                <social.icon className="w-5 h-5 text-gray-600 group-hover:text-teal-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            © {currentYear} [Your Name]. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of coffee.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-teal-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
