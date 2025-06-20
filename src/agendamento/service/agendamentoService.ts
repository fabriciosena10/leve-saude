import { CreateAgendamentoDto } from '@agendamento/dto/createAgendamentoDto';

export class AgendamentoService {
  async createAgendamento(data: CreateAgendamentoDto) {
    const { agendamento } = data;

    return {
      mensagem: 'Agendamento realizado com sucesso',
      agendamento,
    };
  }
}
