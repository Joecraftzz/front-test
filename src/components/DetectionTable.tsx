import { AlertTriangle, Shield, ChevronRight } from 'lucide-react';
import { Client } from '../data/mockData';

interface DetectionTableProps {
  clients: Client[];
  loading: boolean;
  onIntervenir: (client: Client) => void;
}

export default function DetectionTable({ clients, loading, onIntervenir }: DetectionTableProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
        <div className="p-2 bg-red-50 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Detección Inmediata</h3>
          <p className="text-sm text-gray-500">
            Clientes con probabilidad de mora Alta o Crítica
          </p>
        </div>
        <span className="ml-auto bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          {clients.length} clientes
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/80">
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                ID
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                Nombre
              </th>
              <th className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                Score
              </th>
              <th className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                Probabilidad
              </th>
              <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                Monto Riesgo
              </th>
              <th className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {clients.map((client) => (
              <tr
                key={client.id}
                className="hover:bg-orange-50/30 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-mono text-gray-500">
                  {client.id}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">
                      {client.nombre.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{client.nombre}</p>
                      <p className="text-xs text-gray-400">{client.segmento} | {client.diasMora} días mora</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-flex items-center justify-center w-12 h-8 rounded-lg text-sm font-bold ${
                      client.score <= 30
                        ? 'bg-red-100 text-red-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {client.score}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      client.probabilidad === 'Crítica'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {client.probabilidad === 'Crítica' && (
                      <AlertTriangle className="w-3 h-3" />
                    )}
                    {client.probabilidad}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                  ${client.montoEnRiesgo.toLocaleString('es-EC')}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onIntervenir(client)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-md hover:shadow-orange-500/20 active:scale-95"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    Intervenir
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
