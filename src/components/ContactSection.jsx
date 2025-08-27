import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "singhpooja2944@gmail.com",
    link: "mailto:singhpooja2944@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 63549 39298",
    link: "tel:+916354939298",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    link: "#",
  },
];

const socialLinks = [
  { icon: Linkedin, link: "https://www.linkedin.com/in/singhpooja-dev/" },
  { icon: Twitter, link: "https://x.com/PoojaSingh294" },
  { icon: Github, link: "https://github.com/Pooja-so" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  function resetForm() {
    emailRef.current.value = "";
    nameRef.current.value = "";
    messageRef.current.value = "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setIsSubmitting(false);
      resetForm();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          I’m always open to discussing new ideas, projects, or opportunities.
          Let’s connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-lg hover:scale-[1.02] transition-transform hover:bg-white/10 duration-500"
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <a
                      href={item.link}
                      className="text-foreground/70 hover:text-primary transition-colors text-md"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-lg mb-3">Connect with Me</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-md"
              />
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-md"
              />
              <textarea
                ref={messageRef}
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-md"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
