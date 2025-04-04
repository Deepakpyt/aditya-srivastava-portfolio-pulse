
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ThreeDChart from '../components/3DChart';
import AnimatedSection from '../components/AnimatedSection';

const Index = () => {
  useEffect(() => {
    document.title = "Aditya Srivastava | Trading & Financial Consultant";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        
        <section id="performance" className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-finance-900 mb-8">
                Performance <span className="gradient-text">Analytics</span>
              </h2>
              <p className="text-finance-600 text-center max-w-2xl mx-auto mb-12">
                Track record of delivering consistent growth across market conditions through strategic portfolio management.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={300}>
              <ThreeDChart 
                data={[
                  { label: 'Q1 2024', value: 24 },
                  { label: 'Q2 2024', value: 36 },
                  { label: 'Q3 2024', value: 42 },
                  { label: 'Q4 2024', value: 58 },
                  { label: 'Q1 2025', value: 67 }
                ]}
                className="rounded-xl shadow-lg p-4 glass-card mb-12"
              />
            </AnimatedSection>
          </div>
        </section>
        
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
