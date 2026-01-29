type Props = {
  name: string;
  color: string;
};

export default function IntegrationCard({ name, color }: Props) {
  return (
    <div
      className="w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center bg-white hover:scale-110 transition"
      style={{ boxShadow: `0 4px 20px ${color}20` }}
    >
      <div className="text-3xl font-bold" style={{ color }}>
        {name.substring(0, 1)}
      </div>
    </div>
  );
}
