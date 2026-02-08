"use client";

import { useState } from "react";
import { CheckCircle, Star, Code, TrendingUp, Users, Zap, Bot, BrainCircuit, ShoppingCart, Package } from "lucide-react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(null);

 const services = [
  {
    icon: <Code className="w-12 h-12 text-emerald-400" />,
    title: "Software Development",
    description: "Custom web and mobile applications built with cutting-edge technologies that scale your business and increase operational efficiency.",
    features: ["Custom Web Applications", "Mobile App Development", "API Integration", "Cloud Solutions"]
  },
  {
    title: "Digital Marketing",
    description: "Data-driven paid campaigns that convert visitors into paying customers and maximize your ROI.",
    icon: <TrendingUp className="w-10 h-10 text-emerald-400" />,
    features: [
      "Performance Ads",
      "Conversion Tracking & Analytics",
      "Customer Retargeting & Re-engagement",
      "Sales-Focused Campaigns"
    ],
  },
  {
    title: "Shopify E-Commerce Development",
    description: "Launch your online store and scale to millions in monthly sales with our complete Shopify solutions designed for rapid business growth.",
    icon: <ShoppingCart className="w-10 h-10 text-emerald-400" />,
    features: [
      "Custom Shopify store setup",
      "Product optimization for conversions",
      "Payment gateway integration",
      "Inventory & order management"
    ],
  },
  {
    title: "Amazon Business Solutions",
    description: "Dominate Amazon marketplace with our end-to-end services—from store setup to sales optimization that drives consistent revenue.",
    icon: <Package className="w-10 h-10 text-emerald-400" />,
    features: [
      "Amazon store setup & optimization",
      "Product listing & SEO",
      "PPC campaign management",
      "Inventory & fulfillment strategy"
    ],
  },
  {
    title: "Chatbot Development (AI / WhatsApp / Website)",
    description: "Automate customer engagement 24/7 with AI chatbots that convert leads into sales while you sleep.",
    icon: <Bot className="w-10 h-10 text-emerald-400" />,
    features: [
      "WhatsApp automation for sales",
      "AI-powered customer support",
      "Lead qualification & nurturing",
      "Train chatbot with your business data"
    ],
  },
  {
    title: "AI / ML Model Training",
    description: "Leverage predictive AI/ML models to make smarter business decisions, forecast demand, and stay ahead of competition.",
    icon: <BrainCircuit className="w-10 h-10 text-emerald-400" />,
    features: [
      "Sales forecasting models",
      "Customer behavior analysis",
      "Predictive analytics for growth",
      "Deployment & monitoring"
    ],
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-300">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
                className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeService === idx
                    ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/50 shadow-xl shadow-emerald-500/20"
                    : "bg-slate-900/50 border-slate-800 hover:border-emerald-500/30"
                }`}
              >
                <div className="text-emerald-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {idx === 1 && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30">
                    <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                      <Star className="w-5 h-5 fill-current" />
                      <span>1 Week Free Demo Available</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}