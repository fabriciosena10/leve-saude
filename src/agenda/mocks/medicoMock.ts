import { Medico } from '@agenda/interface/medicoInterface';

export const MEDICOS_MOCK: Medico[] = [
  {
    id: 1,
    nome: 'Dr. João Silva',
    especialidade: 'Cardiologista',
    horarios_disponiveis: [
      '2025-06-25 09:00',
      '2025-06-25 10:00',
      '2025-06-25 11:00',
    ],
  },
  {
    id: 2,
    nome: 'Dra. Maria Souza',
    especialidade: 'Dermatologista',
    horarios_disponiveis: ['2025-06-26 14:00', '2025-06-26 15:00'],
  },
];
