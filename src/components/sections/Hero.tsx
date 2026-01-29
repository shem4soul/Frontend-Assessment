import ContactForm from "../Forms/ContactForm";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-6 text-center mb-12">
        <p className="text-cyan-400 mb-4 uppercase tracking-wide text-sm">
          REQUEST DEMO
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          We'd love to hear from you
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Contact us and get a personal response within 1 hour on weekdays.
        </p>
      </div>

      <ContactForm />
    </section>
  );
}
