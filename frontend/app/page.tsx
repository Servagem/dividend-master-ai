import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
export default function Home() {

  return (

    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-slate-950 p-10 text-white">

  <h1 className="text-4xl font-bold">
    Dashboard
  </h1>

  <div className="grid grid-cols-2 gap-6 mt-8">

    <DashboardCard
      titulo="Patrimônio"
      valor="R$ 119.392"
    />

    <DashboardCard
      titulo="Dividendos"
      valor="R$ 2.233/mês"
    />

    <DashboardCard
      titulo="Rentabilidade"
      valor="14,82%"
    />

    <DashboardCard
      titulo="Meta"
      valor="R$ 10.000/mês"
    />

  </div>

</main>

    </div>

  )

}