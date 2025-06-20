import { z } from 'zod';

export const CreateAgendamentoSchema = z.object({
  agendamento: z.object({
    medico: z
      .string({ required_error: 'O campo medico é obrigatório.' })
      .min(3),
    paciente: z
      .string({ required_error: 'O campo paciente é obrigatório.' })
      .min(3),
    data_horario: z
      .string({ required_error: 'O campo data_horario é obrigatório.' })
      .regex(
        /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
        'Formato de data inválido. Use AAAA-MM-DD HH:mm',
      ),
  }),
});

export type CreateAgendamentoDto = z.infer<typeof CreateAgendamentoSchema>;
