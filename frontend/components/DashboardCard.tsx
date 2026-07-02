type DashboardCardProps = {
  titulo: string;
  valor: string;
};

export default function DashboardCard({
  titulo,
  valor,
}: DashboardCardProps) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-gray-400 text-sm">
        {titulo}
      </h2>

      <p className="text-3xl font-bold text-white mt-3">
        {valor}
      </p>
    </div>
  );
}