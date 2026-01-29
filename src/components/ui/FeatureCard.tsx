type Props = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

export default function FeatureCard({ Icon, title, description }: Props) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group">
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
