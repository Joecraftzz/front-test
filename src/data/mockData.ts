export interface Client {
  id: string;
  nombre: string;
  cedula: string;
  score: number;
  probabilidad: 'Alta' | 'Crítica' | 'Media' | 'Baja';
  montoPrestamo: number;
  montoEnRiesgo: number;
  ingresos: number;
  historial: number;
  nivelDeuda: number;
  estabilidadLaboral: number;
  posibleCausa: string;
  accionPreventiva: string;
  fechaAnalisis: string;
  segmento: string;
  diasMora: number;
}

export interface Metrics {
  totalAnalizados: number;
  carteraRiesgo: number;
  altoRiesgo: number;
  montoEnRiesgo: number;
}

export const clients: Client[] = [
  {
    id: 'CLI-001',
    nombre: 'Carlos Andrés Paredes',
    cedula: '0401567890',
    score: 28,
    probabilidad: 'Crítica',
    montoPrestamo: 12500,
    montoEnRiesgo: 12500,
    ingresos: 680,
    historial: 35,
    nivelDeuda: 92,
    estabilidadLaboral: 20,
    posibleCausa: 'Pérdida de empleo reciente y acumulación de deudas en tarjetas de crédito',
    accionPreventiva: 'Ofrecer refinanciamiento a 36 meses con tasa preferencial y asesoría financiera gratuita',
    fechaAnalisis: '2026-05-18',
    segmento: 'Consumo',
    diasMora: 45,
  },
  {
    id: 'CLI-002',
    nombre: 'María Fernanda Espinoza',
    cedula: '0402876543',
    score: 34,
    probabilidad: 'Alta',
    montoPrestamo: 8500,
    montoEnRiesgo: 7200,
    ingresos: 520,
    historial: 48,
    nivelDeuda: 78,
    estabilidadLaboral: 40,
    posibleCausa: 'Reducción de horas laborales y gastos médicos imprevistos',
    accionPreventiva: 'Reestructurar deuda con período de gracia de 3 meses y pago escalonado',
    fechaAnalisis: '2026-05-17',
    segmento: 'Consumo',
    diasMora: 30,
  },
  {
    id: 'CLI-003',
    nombre: 'Jorge Luis Morales',
    cedula: '0403123456',
    score: 22,
    probabilidad: 'Crítica',
    montoPrestamo: 22000,
    montoEnRiesgo: 22000,
    ingresos: 950,
    historial: 25,
    nivelDeuda: 95,
    estabilidadLaboral: 15,
    posibleCausa: 'Quiebra del negocio familiar y deudas con múltiples instituciones',
    accionPreventiva: 'Convenio de pago parcial con garantía prendaria y seguimiento semanal',
    fechaAnalisis: '2026-05-19',
    segmento: 'Microcrédito',
    diasMora: 62,
  },
  {
    id: 'CLI-004',
    nombre: 'Ana Lucía Vallejo',
    cedula: '0404987654',
    score: 38,
    probabilidad: 'Alta',
    montoPrestamo: 5000,
    montoEnRiesgo: 3500,
    ingresos: 420,
    historial: 55,
    nivelDeuda: 70,
    estabilidadLaboral: 45,
    posibleCausa: 'Separación conyugal y duplicación de gastos de vivienda',
    accionPreventiva: 'Ajustar cuota mensual y vincular con programa de apoyo social de la cooperativa',
    fechaAnalisis: '2026-05-16',
    segmento: 'Consumo',
    diasMora: 21,
  },
  {
    id: 'CLI-005',
    nombre: 'Roberto Carlos Guzmán',
    cedula: '0405345678',
    score: 31,
    probabilidad: 'Alta',
    montoPrestamo: 15000,
    montoEnRiesgo: 12800,
    ingresos: 780,
    historial: 42,
    nivelDeuda: 82,
    estabilidadLaboral: 35,
    posibleCausa: 'Atraso en pagos de proveedores afectando flujo de caja de su negocio',
    accionPreventiva: 'Consolidar deudas en un solo crédito con plazo extendido a 48 meses',
    fechaAnalisis: '2026-05-20',
    segmento: 'Microcrédito',
    diasMora: 38,
  },
  {
    id: 'CLI-006',
    nombre: 'Patricia Elena Rosero',
    cedula: '0406789012',
    score: 25,
    probabilidad: 'Crítica',
    montoPrestamo: 18000,
    montoEnRiesgo: 18000,
    ingresos: 610,
    historial: 30,
    nivelDeuda: 88,
    estabilidadLaboral: 25,
    posibleCausa: 'Enfermedad crónica diagnosticada recientemente con altos costos de tratamiento',
    accionPreventiva: 'Aplicar seguro de desempleo/enfermedad y reprogramar deuda con tasa 0% por 6 meses',
    fechaAnalisis: '2026-05-15',
    segmento: 'Consumo',
    diasMora: 55,
  },
  {
    id: 'CLI-007',
    nombre: 'Fernando Arturo López',
    cedula: '0407654321',
    score: 62,
    probabilidad: 'Media',
    montoPrestamo: 7500,
    montoEnRiesgo: 1200,
    ingresos: 890,
    historial: 70,
    nivelDeuda: 45,
    estabilidadLaboral: 65,
    posibleCausa: 'Retraso puntual por olvido, sin patrón de incumplimiento',
    accionPreventiva: 'Recordatorio automático de pagos y evaluación en 60 días',
    fechaAnalisis: '2026-05-19',
    segmento: 'Consumo',
    diasMora: 5,
  },
  {
    id: 'CLI-008',
    nombre: 'Gabriela Alejandra Ruiz',
    cedula: '0408567890',
    score: 78,
    probabilidad: 'Baja',
    montoPrestamo: 4000,
    montoEnRiesgo: 0,
    ingresos: 1100,
    historial: 88,
    nivelDeuda: 25,
    estabilidadLaboral: 80,
    posibleCausa: 'Sin indicadores de riesgo significativos',
    accionPreventiva: 'Monitoreo estándar trimestral',
    fechaAnalisis: '2026-05-20',
    segmento: 'Consumo',
    diasMora: 0,
  },
];

export const metrics: Metrics = {
  totalAnalizados: 8,
  carteraRiesgo: 37.5,
  altoRiesgo: 5,
  montoEnRiesgo: 75700,
};
