import { AgendaRepository } from '@agenda/repository/agendaRepository';

export class AgendaService {
  constructor(private readonly agendaRepository: AgendaRepository) {}

  async getAgendas() {
    const medicos = await this.agendaRepository.findAll();
    return { medicos };
  }
}
