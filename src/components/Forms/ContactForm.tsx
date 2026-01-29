import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    companyWebsite: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inputs same as your original — unchanged */}
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            name="name"
            required
            placeholder="Your name"
            onChange={handleChange}
            className="input"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            onChange={handleChange}
            className="input"
          />
        </div>

        <input
          name="companyName"
          placeholder="Company name"
          onChange={handleChange}
          className="input"
        />
        <input
          name="companyWebsite"
          placeholder="Website"
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your needs..."
          onChange={handleChange}
          className="input"
        />

        <button
          type="submit"
          className="w-full py-4 bg-cyan-400 text-purple-900 rounded-full font-bold text-lg hover:bg-cyan-300 transition"
        >
          Request Demo
        </button>
      </form>
    </div>
  );
}
