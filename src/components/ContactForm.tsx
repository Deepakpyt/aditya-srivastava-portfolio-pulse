
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (would be replaced with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll be in touch soon!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "aditya@financepulse.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Financial District, New York",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h3 className="text-finance-gold font-medium mb-3">Contact</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-finance-900">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-finance-gold mx-auto mt-4 mb-6"></div>
            <p className="text-finance-600 max-w-2xl mx-auto">
              Let's discuss how I can help you achieve your financial objectives with tailored strategies.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-up" threshold={0.2}>
            <div className="rounded-lg bg-finance-50 p-8 h-full">
              <h3 className="text-2xl font-semibold text-finance-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6 mb-8">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-finance-100 flex items-center justify-center text-finance-gold mr-4">
                      <detail.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-finance-700">{detail.label}</p>
                      <p className="text-finance-800">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-finance-200">
                <h4 className="font-medium text-finance-800 mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-finance-100 flex items-center justify-center text-finance-600 hover:bg-finance-gold hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-finance-100 flex items-center justify-center text-finance-600 hover:bg-finance-gold hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200} threshold={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-finance-700">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full border-finance-200 focus:border-finance-gold focus:ring focus:ring-finance-gold/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-finance-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full border-finance-200 focus:border-finance-gold focus:ring focus:ring-finance-gold/10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-finance-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="w-full border-finance-200 focus:border-finance-gold focus:ring focus:ring-finance-gold/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-finance-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    rows={6}
                    className="w-full border-finance-200 focus:border-finance-gold focus:ring focus:ring-finance-gold/10"
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                className="bg-finance-800 hover:bg-finance-900 text-white w-full sm:w-auto flex items-center justify-center gap-2 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
