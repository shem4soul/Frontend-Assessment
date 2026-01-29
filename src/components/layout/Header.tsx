export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg"></div>
          <span className="text-2xl font-bold">enif</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-cyan-300 transition">
            Conversational AI
          </a>
          <a href="#" className="hover:text-cyan-300 transition">
            Deflection
          </a>
          <a href="#" className="hover:text-cyan-300 transition">
            Scaled AI
          </a>
          <a href="#" className="hover:text-cyan-300 transition">
            Inst Voice
          </a>
        </div>

        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-purple-900 transition">
            Request Demo
          </button>
          <button className="px-6 py-2 bg-cyan-400 text-purple-900 rounded-full hover:bg-cyan-300 transition font-semibold">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
