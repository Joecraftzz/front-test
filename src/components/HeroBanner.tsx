import { AlertTriangle, TrendingDown } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-xl border border-orange-500/30 shrink-0">
            <TrendingDown className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              ANALIZANDO CADA DATO, PROTEGIENDO TU FUTURO.
            </h2>
            <p className="text-orange-300 font-semibold text-base sm:text-lg mt-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              DETECCIÓN DE MORA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
