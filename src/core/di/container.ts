import { AgendaRepository } from '@agenda/repository/agendaRepository';
import { AgendaService } from '@agenda/service/agendaService';

class Container {
  public readonly agendaService: AgendaService;

  constructor() {
    const agendaRepository = new AgendaRepository();
    this.agendaService = new AgendaService(agendaRepository);
  }
}

export const container = new Container();
