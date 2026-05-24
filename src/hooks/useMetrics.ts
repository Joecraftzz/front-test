import { useState, useEffect } from 'react';
import { metrics, Metrics } from '../data/mockData';

export function useMetrics() {
  const [data, setData] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(metrics);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return { metrics: data, loading };
}
