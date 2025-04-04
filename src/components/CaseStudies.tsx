
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TrendingUp, BarChart3, LineChart } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Tech Stock Portfolio Optimization",
    subtitle: "22% annual return",
    description: "Strategic rebalancing of a technology-focused portfolio resulting in significant outperformance compared to benchmark indices.",
    icon: TrendingUp,
    fullDescription: "Developed and implemented a proprietary tech sector screening methodology to identify high-growth potential opportunities amid market volatility. The restructured portfolio achieved a 22% annual return over a 3-year period, outperforming the S&P Technology Select Sector Index by 7.8%. Strategy included tactical allocation adjustments across software, semiconductor, and emerging technology segments, coupled with strategic hedging during anticipated market corrections.",
    metrics: [
      { label: "Return Increase", value: "22%" },
      { label: "Risk Reduction", value: "18%" },
      { label: "Time Period", value: "3 Years" }
    ]
  },
  {
    id: 2,
    title: "Risk Management Strategy",
    subtitle: "18% volatility reduction",
    description: "Implementation of advanced risk mitigation techniques resulting in significant volatility reduction while maintaining returns.",
    icon: BarChart3,
    fullDescription: "Designed a comprehensive risk management framework for a high-net-worth client's diversified portfolio. By employing advanced statistical methods including Value-at-Risk modeling and correlation analysis, we achieved an 18% reduction in portfolio volatility while maintaining comparable returns. The strategy incorporated diversification across non-correlated assets, strategic options usage for downside protection, and systematic rebalancing protocols that adjusted to changing market conditions.",
    metrics: [
      { label: "Volatility Reduction", value: "18%" },
      { label: "Alpha Generated", value: "3.2%" },
      { label: "Assets Protected", value: "$12M+" }
    ]
  },
  {
    id: 3,
    title: "Emerging Markets Allocation",
    subtitle: "27% outperformance",
    description: "Strategic allocation to high-potential emerging market sectors resulting in significant outperformance versus benchmarks.",
    icon: LineChart,
    fullDescription: "Developed a tactical emerging markets investment strategy focused on identifying specific growth regions with favorable economic indicators and governance improvements. The resulting allocation achieved a 27% outperformance versus the MSCI Emerging Markets Index over a 24-month period. The approach combined macroeconomic analysis, currency hedging strategies, and selective exposure to consumer-driven sectors in economies demonstrating strong domestic growth characteristics and reduced reliance on traditional export models.",
    metrics: [
      { label: "Outperformance", value: "27%" },
      { label: "Drawdown Reduction", value: "14%" },
      { label: "Coverage", value: "12 Markets" }
    ]
  }
];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = (caseStudy: typeof caseStudies[0]) => {
    setSelectedCase(caseStudy);
    setOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding bg-finance-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h3 className="text-finance-gold font-medium mb-3">Portfolio</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-finance-900">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-finance-gold mx-auto mt-4 mb-6"></div>
            <p className="text-finance-600 max-w-2xl mx-auto">
              Explore case studies of successful trading and investment strategies that delivered exceptional results for clients.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <AnimatedSection key={caseStudy.id} delay={index * 150}>
              <div className="case-study-card h-full flex flex-col group">
                <div className="bg-finance-800 text-white p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                    <caseStudy.icon className="text-finance-gold" size={24} />
                  </div>
                  <p className="text-finance-gold font-medium">{caseStudy.subtitle}</p>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-finance-600 flex-grow">{caseStudy.description}</p>
                  <Button 
                    variant="ghost" 
                    className="mt-4 text-finance-700 hover:text-finance-gold hover:bg-finance-50 p-0 justify-start group transition-colors"
                    onClick={() => handleOpenDialog(caseStudy)}
                  >
                    <span className="flex items-center">
                      View Case Study
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      {selectedCase && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-finance-900">
                <selectedCase.icon className="text-finance-gold" size={20} />
                {selectedCase.title}
              </DialogTitle>
              <DialogDescription className="text-finance-gold font-medium">
                {selectedCase.subtitle}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 text-finance-700">
              <p className="mb-6">{selectedCase.fullDescription}</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {selectedCase.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-3 bg-finance-50 rounded-lg">
                    <p className="text-finance-gold text-xl font-bold">{metric.value}</p>
                    <p className="text-finance-700 text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button 
                  className="bg-finance-800 hover:bg-finance-900 text-white"
                  onClick={() => setOpen(false)}
                >
                  <a href="#contact">Request Similar Strategy</a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default CaseStudies;
