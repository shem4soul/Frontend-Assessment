import { integrations } from "../../data/integrations";

export default function Integrations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Integrate Top Work Tools
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {integrations.map((item, i) => (
          <div
            key={i}
            className="w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center bg-white hover:scale-110 transition"
            style={{ boxShadow: `0 4px 20px ${item.color}20` }}
          >
            <div className="text-3xl font-bold" style={{ color: item.color }}>
              {item.name[0]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
