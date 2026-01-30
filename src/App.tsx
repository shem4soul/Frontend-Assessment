import React, { useState } from "react";
import {
  Zap,
  BarChart3,
  MessageSquare,
  Target,
  TrendingUp,
  Workflow,
  Package,
} from "lucide-react";

export default function EnifWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    companyWebsite: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your request! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Executions",
      description:
        "Automate tasks instantly with generative AI-powered workflows and decision-making.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Deflection",
      description: "Reduce support tickets with high-volume self-service.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Integrations",
      description:
        "Stay in flow—aggregate the AI network apps like Slack, integrate to centralize work.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics",
      description:
        "Get valuable insights. Call confidence API performance and conversion analytics.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SLA tracking",
      description:
        "Track and meet SLA in AI evaluations for tracking and alerting.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead generation",
      description:
        "Generate new leads and upsell existing customers with conversational AI.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Sentiment analysis",
      description:
        "Analyze customer feedback to improve customer satisfaction and loyalty.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Custom workflows",
      description:
        "Design workflows that work best for customers needs in minutes with AI logic.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Product development",
      description:
        "Improve products and services based on faster time to market.",
    },
  ];

  const integrations = [
    { name: "Intercom", color: "#4A90E2" },
    { name: "Google", color: "#4285F4" },
    { name: "Slack", color: "#E01E5A" },
    { name: "Zendesk", color: "#03363D" },
    { name: "Mailchimp", color: "#FFE01B" },
    { name: "Trello", color: "#0079BF" },
    { name: "Salesforce", color: "#00A1E0" },
    { name: "Shopify", color: "#96BF48" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg"></div>
            <span className="text-2xl font-bold">enif</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-cyan-300 transition">
              Conversational AI
            </a>
            <a href="#" className="hover:text-cyan-300 transition">
              Deflection
            </a>
            <a href="#" className="hover:text-cyan-300 transition">
              Scaled AI
            </a>
            <a href="#" className="hover:text-cyan-300 transition">
              Inst Voice
            </a>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-purple-900 transition">
              Request Demo
            </button>
            <button className="px-6 py-2 bg-cyan-400 text-purple-900 rounded-full hover:bg-cyan-300 transition font-semibold">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section - Contact Form */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-cyan-400 mb-4 uppercase tracking-wide text-sm">
              REQUEST DEMO
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We'd love to hear from you
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Contact us and get a personal response within 1 hour, in the
              weekdays or 6 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <span>Conversational AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <span>Hyper-connectivity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span>Advanced Analytics</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Phone Number
                </label>
                <div className="flex">
                  <select className="px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-white text-gray-900">
                    <option>🇺🇸 +1</option>
                    <option>🇬🇧 +44</option>
                    <option>🇨🇦 +1</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Company Website
                </label>
                <input
                  type="url"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Let me explain. Prospects should align
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Where did you hear about us?
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900">
                  <option value="">Select an option</option>
                  <option>Search Engine</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-cyan-400 text-purple-900 rounded-full font-bold text-lg hover:bg-cyan-300 transition shadow-lg"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experiment at Scale
            </h2>
            <p className="text-xl text-gray-600">
              We work data-centric AI that combines at Scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Integrate Top Work Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Omnichat network workflow across multiple channels to boost
              productivity and unite collaboration among teams. Enjoy real-time
              insights on workflow performance and identify bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center bg-white hover:scale-110 transition"
                style={{ boxShadow: `0 4px 20px ${integration.color}20` }}
              >
                <div
                  className="text-3xl font-bold"
                  style={{ color: integration.color }}
                >
                  {integration.name.substring(0, 1)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-12 shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40'%3E%3Ctext x='10' y='30' font-family='Arial' font-size='24' font-weight='bold'%3ECreoPal%3C/text%3E%3C/svg%3E"
                alt="CreoPal"
                className="h-10"
              />
            </div>
            <p className="text-xl text-gray-700 text-center leading-relaxed mb-8">
              To improve their operations,{" "}
              <strong>CreoPal turned to Enif</strong> by using Enif's AI and
              automation capabilities. CreoPal was able to efficiently handle a
              high volume of customer queries. Improve customer satisfaction,
              and drive growth for their business.{" "}
              <strong>
                With Enif's help, CreoPal was able to increase conversions
              </strong>{" "}
              while reducing cost and stay ahead of the competition by
              proactively addressing customer needs based on data-driven
              insights.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                C
              </div>
              <div>
                <p className="font-bold text-gray-900">CreoPal</p>
                <p className="text-gray-600 text-sm">Head of Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg"></div>
                <span className="text-2xl font-bold">enif</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Conversational AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Deflection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Scaled AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Tech Stack
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Fin-tech Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Product Complexity
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <button className="px-8 py-3 bg-cyan-400 text-purple-900 rounded-full hover:bg-cyan-300 transition font-semibold">
                Get Started
              </button>
              <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-purple-900 transition">
                Request Demo
              </button>
            </div>
          </div>
          <div className="border-t border-purple-800 pt-8 flex justify-between items-center">
            <p className="text-gray-400">© 2025 Enif</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white text-purple-900 rounded-full flex items-center justify-center hover:bg-cyan-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white text-purple-900 rounded-full flex items-center justify-center hover:bg-cyan-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
