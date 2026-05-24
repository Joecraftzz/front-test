import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import KPIPanel from './components/KPIPanel';
import DetectionTable from './components/DetectionTable';
import ClientDetailModal from './components/ClientDetailModal';
import PlaceholderModule from './components/PlaceholderModule';
import { useClients } from './hooks/useClients';
import { useMetrics } from './hooks/useMetrics';
import { Client } from './data/mockData';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const { highRiskClients, loading: clientsLoading } = useClients();
  const { metrics, loading: metricsLoading } = useMetrics();

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={() => setIsLoggedIn(false)} />
      <HeroBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <KPIPanel metrics={metrics} loading={metricsLoading} />
        <DetectionTable
          clients={highRiskClients}
          loading={clientsLoading}
          onIntervenir={(client) => setSelectedClient(client)}
        />
        <PlaceholderModule />
      </main>

      {selectedClient && (
        <ClientDetailModal
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
}
