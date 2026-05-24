import { Database, Upload } from 'lucide-react';

export default function PlaceholderModule() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-5">
          <Database className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Módulo de Escalabilidad
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Esperando origen de datos adicional (Ej: Historial Transaccional)
        </p>
        <button
          disabled
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-100 text-gray-400 font-medium rounded-xl cursor-not-allowed"
        >
          <Upload className="w-4 h-4" />
          Simular Carga de Dataset Externo
        </button>
      </div>
    </div>
  );
}
