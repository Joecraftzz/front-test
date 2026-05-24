import { useState, useEffect } from 'react';
import { clients, Client } from '../data/mockData';

export function useClients() {
  const [data, setData] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(clients);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const highRiskClients = data.filter(
    (c) => c.probabilidad === 'Alta' || c.probabilidad === 'Crítica'
  );

  return { clients: data, highRiskClients, loading };
}
