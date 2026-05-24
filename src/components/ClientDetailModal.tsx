import { X, AlertTriangle, Shield, Lightbulb, Bell, User } from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { Client } from '../data/mockData';

interface ClientDetailModalProps {
  client: Client;
  onClose: () => void;
}

export default function ClientDetailModal({ client, onClose }: ClientDetailModalProps) {
  const radarData = [
    { metric: 'Ingresos', value: client.ingresos },
    { metric: 'Historial', value: client.historial },
    { metric: 'Nivel Deuda', value: client.nivelDeuda },
    { metric: 'Estabilidad', value: client.estabilidadLaboral },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-800 to-green-700 px-6 py-5 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <User className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{client.nombre}</h3>
              <p className="text-green-200/60 text-sm">
                {client.id} | {client.cedula} | {client.segmento}
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  client.probabilidad === 'Crítica'
                    ? 'bg-red-500/20 text-red-300'
                    : 'bg-orange-500/20 text-orange-300'
                }`}
              >
                {client.probabilidad}
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                Score: {client.score}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Monto Préstamo', value: `$${client.montoPrestamo.toLocaleString('es-EC')}` },
              { label: 'Monto en Riesgo', value: `$${client.montoEnRiesgo.toLocaleString('es-EC')}` },
              { label: 'Días de Mora', value: `${client.diasMora} días` },
              { label: 'Fecha Análisis', value: client.fechaAnalisis },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-sm font-semibold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Radar Chart */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-orange-500" />
              Perfil de Riesgo
            </h4>
            <div className="bg-gray-50 rounded-xl p-4">
              <ResponsiveContainer width="100%" height={280}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis
                    dataKey="metric"
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                  />
                  <Radar
                    name="Perfil"
                    dataKey="value"
                    stroke="#f97316"
                    fill="#f97316"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h4 className="font-semibold text-red-800 text-sm">Posible Causa</h4>
              </div>
              <p className="text-sm text-red-700 leading-relaxed">{client.posibleCausa}</p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800 text-sm">Acción Preventiva</h4>
              </div>
              <p className="text-sm text-green-700 leading-relaxed">{client.accionPreventiva}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.98]">
              <Shield className="w-4 h-4" />
              Aplicar Acción
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-700/20 active:scale-[0.98]">
              <Bell className="w-4 h-4" />
              Notificar Asesor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
