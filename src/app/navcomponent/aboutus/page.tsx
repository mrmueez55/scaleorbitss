"use client";

import { useState } from "react";
import {
  Zap,
  Target,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  Rocket,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function AboutUsPage() {
  const [activeValue, setActiveValue] = useState(0);

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Rocket className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Target className="w-6 h-6" /> },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation First",
      description:
        "We stay ahead of the curve, adopting cutting-edge technologies to give your business a competitive advantage.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Client-Centric Approach",
      description:
        "Your success is our success. We build long-term partnerships by delivering measurable results that matter.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Growth-Driven Solutions",
      description:
        "Every solution we create is designed to scale your business, increase revenue, and drive sustainable growth.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "10+ years driving digital transformation for startups and enterprises.",
    },
    {
      name: "Sarah Chen",
      role: "Head of Development",
      bio: "Expert in Next.js, React, and scalable cloud architectures.",
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Strategist",
      bio: "Generated $10M+ in revenue through data-driven campaigns.",
    },
  ];

  const journey = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started with a vision to help businesses thrive digitally.",
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Expanded services and reached 50+ satisfied clients.",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched AI/ML services and chatbot solutions.",
    },
    {
      year: "2025",
      title: "Global Reach",
      description: "Serving clients worldwide with 150+ successful projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5"></div>
        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm mb-6">
            🚀 About ScaleOrbits
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            We Don't Just Build Software,
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              {" "}
              We Build Businesses
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ScaleOrbits is a tech-driven agency that transforms ambitious ideas into
            profitable realities. We combine software development, digital marketing, and
            AI innovation to help businesses scale fast and smart.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <div className="flex justify-center text-emerald-400 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We exist to empower startups and growing businesses with technology that
                drives measurable results. Our mission is simple: help you reach your first
                million in sales, and then your next.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Whether it's building a high-converting website, launching your Shopify
                store, or automating your business with AI we're here to make it happen.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20">
                <div className="space-y-4">
                  {["Strategic Planning", "Execution Excellence", "Continuous Growth"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl"
                      >
                        <CheckCircle className="w-6 h-6 text-emerald-400" />
                        <span className="font-semibold">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-300">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveValue(idx)}
                className={`p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeValue === idx
                    ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/50 shadow-xl shadow-emerald-500/20"
                    : "bg-slate-900/50 border-slate-800 hover:border-emerald-500/30"
                }`}
              >
                <div className="text-emerald-400 mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-slate-300">From startup to success story</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((milestone, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all"
              >
                <div className="text-emerald-400 text-3xl font-bold mb-3">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-slate-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <div className="p-12 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl border border-emerald-500/30">
      <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
      <p className="text-xl text-slate-300 mb-8">
        Let's turn your vision into a thriving digital presence
      </p>

      <a
        href="mailto:contact@aquasolutions.com?subject=Business Inquiry - Let's Grow Together&body=Hi Aqua Solutions Team,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0APhone:%0D%0AMessage:"
        className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all inline-flex items-center group"
      >
        Start Your Journey
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </a>

      <p className="text-slate-400 text-sm mt-4">
        Click to send us an email and we'll get back to you within 24 hours
      </p>
    </div>
  </div>
</section>

    </div>
  );
}