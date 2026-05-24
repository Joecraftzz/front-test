import { Shield, LogOut, User } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  return (
    <header className="bg-green-800 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-green-700/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 bg-orange-500/20 rounded-lg border border-orange-500/30">
              <Shield className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">
                Cooperativa Tulcán Ltda.
              </h1>
              <p className="text-green-300/60 text-xs">Detección de Mora Temprana</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-200/70 text-sm">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Analista</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-green-200/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
