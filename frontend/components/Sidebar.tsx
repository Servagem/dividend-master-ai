export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6 min-h-screen">

      <h1 className="text-2xl font-bold text-green-400 mb-8">
        💰 Mestre
      </h1>

      <nav className="space-y-4">

        <button className="block w-full text-left hover:text-green-400">
          🏠 Dashboard
        </button>

        <button className="block w-full text-left hover:text-green-400">
          📈 Carteira
        </button>

        <button className="block w-full text-left hover:text-green-400">
          💵 Dividendos
        </button>

        <button className="block w-full text-left hover:text-green-400">
          🎯 Radar
        </button>

        <button className="block w-full text-left hover:text-green-400">
          🧮 Simulador
        </button>

        <button className="block w-full text-left hover:text-green-400">
          ⚙ Configurações
        </button>

      </nav>

    </aside>
  )
}