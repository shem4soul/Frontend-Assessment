import { integrations } from "../../data/integrations";
import IntegrationCard from "../ui/IntegrationCard";

export default function Integrations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Integrate Top Work Tools
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {integrations.map((item, i) => (
            <IntegrationCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
