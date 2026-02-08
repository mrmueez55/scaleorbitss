"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    service_interest: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { full_name, email, phone_number, service_interest, message } = formData;
  
  if (!full_name || !email || !phone_number || !service_interest || !message) {
    alert("⚠️ Please fill all required fields.");
    return;
  }
    setLoading(true);

    try {
      const response = await fetch("https://www.caryphysicians.com/api/appointments/mueez.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message Sent Successfully!");
        setFormData({
          full_name: "",
          email: "",
          phone_number: "",
          service_interest: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
        console.error(result.error);
      }
    } catch (error) {
      alert("⚠️ Error sending message. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-28 px-4 sm:px-6 lg:px-8">
      {/* Hero - Page Title */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-slate-300">
          Let’s bring your ideas to life. Send us your project details below.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Section */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s Discuss Your Idea</h2>
            <p className="text-slate-300 leading-relaxed">
              Whether you need a website, mobile app, AI automation, chatbot,
              or digital marketing — we build solutions that produce results.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-emerald-400 w-8 h-8" />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="font-semibold">mueez@scaleorbits.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* <Phone className="text-emerald-400 w-8 h-8" /> */}
              {/* <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="font-semibold">+1 (555) 123-4567</p>
              </div> */}
            </div>

            <div className="flex items-center gap-4">
              {/* <MapPin className="text-emerald-400 w-8 h-8" />
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="font-semibold">E10 6AL London, UK</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/40 backdrop-blur-xl p-10 rounded-3xl border border-slate-800 shadow-xl"
        >
          <div className="space-y-6">
            <input
              type="text"
              name="full_name"
              placeholder="Your Name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 text-lg bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600/30 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 text-lg bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600/30 transition-all"
            />

            <input
              type="text"
              name="phone_number"
              placeholder="Your Phone"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 text-lg bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600/30 transition-all"
            />

            <input
              type="text"
              name="service_interest"
              placeholder="Service of Interest"
              value={formData.service_interest}
              onChange={handleChange}
              className="w-full px-4 py-4 text-lg bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600/30 transition-all"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 text-lg bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600/30 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all flex justify-center items-center gap-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
