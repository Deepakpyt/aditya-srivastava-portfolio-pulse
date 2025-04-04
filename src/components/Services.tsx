
import React from "react";
import { BarChart3, TrendingUp, Shield, LineChart, Briefcase, RefreshCw } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Investment Strategies",
    description: "Customized investment plans based on deep market analysis and client financial goals.",
    icon: TrendingUp,
  },
  {
    title: "Portfolio Management",
    description: "Active management of investment portfolios for optimal performance and risk balance.",
    icon: Briefcase,
  },
  {
    title: "Risk Assessment",
    description: "Comprehensive evaluation of investment risks and development of mitigation strategies.",
    icon: Shield,
  },
  {
    title: "Market Analysis",
    description: "Deep dive into market trends and opportunities using advanced analytical techniques.",
    icon: LineChart,
  },
  {
    title: "Financial Planning",
    description: "Holistic financial planning services to achieve long-term wealth objectives.",
    icon: BarChart3,
  },
  {
    title: "Trading Strategy",
    description: "Development of targeted trading strategies aligned with market conditions and goals.",
    icon: RefreshCw,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h3 className="text-finance-gold font-medium mb-3">Services</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-finance-900">
              Expert Financial Services
            </h2>
            <div className="w-20 h-1 bg-finance-gold mx-auto mt-4 mb-6"></div>
            <p className="text-finance-600 max-w-2xl mx-auto">
              Comprehensive financial consulting services tailored to meet your specific needs
              and help you achieve your financial goals.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100} threshold={0.2}>
              <div className="service-card group h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-md bg-finance-50 flex items-center justify-center text-finance-gold mr-4 group-hover:bg-finance-gold/10 transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-finance-800">{service.title}</h3>
                </div>
                <p className="text-finance-600 flex-grow">{service.description}</p>
                <div className="mt-4 pt-2 border-t border-finance-100">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-finance-700 hover:text-finance-gold font-medium transition-colors"
                  >
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
