
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import ThreeDBackground from "./3DBackground";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-finance-50 to-white">
      <ThreeDBackground />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzIzM2Q2MCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KICAgICAgICAgICAgPHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <AnimatedSection delay={200} animation="fade-in">
            <div className="space-y-6">
              <h2 className="text-finance-gold font-semibold text-xl">Trading & Financial Consultant</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-finance-900 leading-tight">
                Aditya <br />
                <span className="gradient-text">Srivastava</span>
              </h1>
              <p className="text-finance-600 text-lg md:text-xl max-w-lg">
                Transforming financial strategies with data-driven insights. 
                Specialized in portfolio optimization, risk management, and market analysis.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-finance-800 hover:bg-finance-900 text-white group transition-all"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Get Started 
                    <ArrowRight 
                      size={18} 
                      className="transition-transform group-hover:translate-x-1" 
                    />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-finance-300 text-finance-800 hover:bg-finance-50"
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400} animation="slide-right" className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-56 h-56 bg-finance-gold/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-finance-gold/5 rounded-full"></div>
              
              <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-xl bg-white">
                <svg 
                  className="w-full aspect-[4/3]" 
                  viewBox="0 0 400 300" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M0,248 L35,235 L70,248 L105,225 L140,180 L175,160 L210,170 L245,155 L280,190 L315,165 L350,145 L385,170 L400,150"  
                    stroke="#d4af37" 
                    strokeWidth="3" 
                    fill="none" 
                  />
                  <path 
                    d="M0,280 L35,260 L70,290 L105,275 L140,220 L175,200 L210,210 L245,195 L280,230 L315,200 L350,175 L385,195 L400,180" 
                    stroke="#102a43" 
                    strokeWidth="3" 
                    fill="none" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-4 border-white glass-card flex items-center justify-center shadow-lg">
                    <span className="text-finance-800 font-bold text-xl">AS</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
