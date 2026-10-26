// Transcrição da tabela Kallucci fornecida para o levantamento.
// Comprimento de palmilha, não comprimento do pé descalço.
export const MEDIDAS = [
  { numero: 33, cm: 22.5 }, { numero: 34, cm: 23.5 },
  { numero: 35, cm: 24 }, { numero: 36, cm: 24.5 },
  { numero: 37, cm: 25.5 }, { numero: 38, cm: 26 },
  { numero: 39, cm: 26.5 }, { numero: 40, cm: 27 },
  { numero: 41, cm: 27.5 }, { numero: 42, cm: 28.5 },
  { numero: 43, cm: 29.5 }, { numero: 44, cm: 30.5 },
  { numero: 45, cm: 31.5 }, { numero: 46, cm: 32 },
  { numero: 47, cm: 32.5 }, { numero: 48, cm: 33 },
] as const;
export function numeroPorPalmilha(cm: number): number | null { return MEDIDAS.find(item => item.cm === cm)?.numero ?? null; }
