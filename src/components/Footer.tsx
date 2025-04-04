
import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-finance-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Aditya<span className="text-finance-gold">.</span>
            </h3>
            <p className="text-finance-300 mb-4">
              Expert trading and financial consulting services to help you achieve your wealth goals.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-finance-700 flex items-center justify-center text-white hover:bg-finance-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                className="w-8 h-8 rounded-full bg-finance-700 flex items-center justify-center text-white hover:bg-finance-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-finance-300 hover:text-finance-gold flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Investment Strategies
                </a>
              </li>
              <li>
                <a href="#services" className="text-finance-300 hover:text-finance-gold flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Portfolio Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-finance-300 hover:text-finance-gold flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Risk Assessment
                </a>
              </li>
              <li>
                <a href="#services" className="text-finance-300 hover:text-finance-gold flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Market Analysis
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-finance-300 hover:text-finance-gold flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-finance-300 hover:text-finance-gold flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-finance-300 hover:text-finance-gold flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-finance-300 hover:text-finance-gold flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-finance-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-finance-300">aditya@financepulse.com</span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-finance-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-finance-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-finance-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-finance-300">Financial District, New York</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-finance-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-finance-400 text-sm">
              © {currentYear} Aditya Srivastava. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-finance-400 hover:text-finance-gold text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-finance-400 hover:text-finance-gold text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
