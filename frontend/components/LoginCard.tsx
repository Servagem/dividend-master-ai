export default function LoginCard() {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-xl p-8 w-full max-w-md">

      <h1 className="text-3xl font-bold text-green-400 text-center">
        💰 Mestre de Dividendos IA
      </h1>

      <p className="text-slate-400 text-center mt-2">
        Entre para acessar sua carteira
      </p>

      <form className="mt-8 space-y-4">

        <input
          type="email"
          placeholder="E-mail"
          className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-green-500"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-green-500"
        />

        <button
          className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold transition"
        >
          Entrar
        </button>

      </form>

    </div>
  );
}