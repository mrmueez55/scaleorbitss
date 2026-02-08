'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import Contactfrom from './navcomponent/contactus/page';
import { Menu, X, Code, ShoppingCart, Package, BrainCircuit, TrendingUp, Zap, Users, CheckCircle, ArrowRight, Star, Bot, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function AquaSolutionsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Software Development",
      description: "Custom web and mobile applications that scale your business.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Digital Marketing",
      description: "Data-driven campaigns that convert visitors into customers.",
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Chatbot Development",
      description: "24/7 automated customer engagement across WhatsApp & web.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Shopify E-Commerce",
      description: "Launch your online store and scale to millions in sales.",
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Amazon Solutions",
      description: "Dominate Amazon marketplace with optimized listings & ads.",
    },
    {
      icon: <BrainCircuit className="w-10 h-10" />,
      title: "AI/ML Model Training",
      description: "Custom predictive models for smarter business decisions.",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 100);
    return () => clearInterval(interval);
  }, [services.length]);
 const handleScrollToContact = () => {
    // Find the element with the id 'contact-form' and scroll to it smoothly
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const projects = [
    { name: "POS Platform", category: "Web Development", result: "Easy to manage the inventory " },
    { name: "Marketing Campaign", category: "Digital Marketing", result: "5x ROI achieved" },
    { name: "Memory Sharing App", category: "Mobile Development", result: "Client idea is appreciated  in whole company" },
    { name: "Brand Launch", category: "Social Media", result: "300k$+ monthly sales" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", company: "TechStart Inc", text: "Aqua Solutions transformed our online presence. The 1-week demo convinced us immediately!", rating: 5 },
    { name: "Michael Chen", company: "GrowthCo", text: "Outstanding development quality and marketing results. Highly recommended!", rating: 5 },
    { name: "Emma Williams", company: "Innovate Labs", text: "Professional team, excellent communication, and incredible ROI on our ad campaigns.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
                🎉 Get 1 Week Free Digital Marketing Demo
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent"> Digital Presence</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Expert software development and data-driven digital marketing solutions that drive real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                onClick={handleScrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/50 transition-all flex items-center justify-center group">
                  Start Free Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">150+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">99%</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">5x</div>
                  <div className="text-sm text-slate-400">Average ROI</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                    <Code className="w-8 h-8 text-emerald-400" />
                    <div>
                      <div className="font-semibold">Software Development</div>
                      <div className="text-sm text-slate-400">Lightning-fast web & mobile apps</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-xl border border-teal-500/30 hover:border-teal-500/50 transition-all">
                    <TrendingUp className="w-8 h-8 text-teal-400" />
                    <div>
                      <div className="font-semibold">Google & Facebook Ads</div>
                      <div className="text-sm text-slate-400">1 week free demo included</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all">
                    <Users className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="font-semibold">Dedicated Support</div>
                      <div className="text-sm text-slate-400">24/7 expert assistance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {services} */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-300">Comprehensive solutions for your digital needs</p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

           
            {/* Scrolling Services */}
            <div className="flex gap-6 overflow-hidden">
              <div className="flex gap-6 animate-scroll-continuous">
                {[...services, ...services].map((service, idx) => (
                  <div
                    key={idx}
                    className="min-w-[300px] p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all cursor-pointer group"
                  >
                    <div className="text-emerald-400 mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>




          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/navcomponent/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/50 transition-all group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-slate-300">Delivering exceptional results for our clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
              >
                <div className="text-sm text-emerald-400 mb-2 font-medium">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.name}</h3>
                <div className="text-slate-300">{project.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-slate-300">Hear what our clients have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    <Contactfrom />





    </div>
  );
}