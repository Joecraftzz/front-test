import { Users, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';
import { Metrics } from '../data/mockData';

interface KPIPanelProps {
  metrics: Metrics | null;
  loading: boolean;
}

export default function KPIPanel({ metrics, loading }: KPIPanelProps) {
  const cards = [
    {
      label: 'Total Analizados',
      value: metrics?.totalAnalizados ?? 0,
      suffix: '',
      icon: Users,
      color: 'bg-green-600',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-300',
    },
    {
      label: 'Cartera en Riesgo',
      value: metrics?.carteraRiesgo ?? 0,
      suffix: '%',
      icon: TrendingDown,
      color: 'bg-orange-500',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      label: 'Alto Riesgo',
      value: metrics?.altoRiesgo ?? 0,
      suffix: '',
      icon: AlertTriangle,
      color: 'bg-red-500',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-400',
    },
    {
      label: 'Monto en Riesgo',
      value: metrics?.montoEnRiesgo ?? 0,
      suffix: '',
      icon: DollarSign,
      color: 'bg-amber-500',
      iconBg: 'bg-amber-500/20',
      iconColor: 'text-amber-400',
      isCurrency: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
          >
            {loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="h-8 bg-gray-200 rounded w-1/2" />
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">{card.label}</span>
                  <div className={`p-2 rounded-lg ${card.iconBg}`}>
                    <Icon className={`w-4 h-4 ${card.iconColor}`} />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {card.isCurrency
                    ? `$${card.value.toLocaleString('es-EC')}`
                    : `${card.value}${card.suffix}`}
                </p>
                <div className={`h-1 w-12 ${card.color} rounded-full mt-3`} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
