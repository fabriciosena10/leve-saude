import { AgendaRepository } from '@agenda/repository/agendaRepository';
import { AgendaService } from '@agenda/service/agendaService';
import { AgendamentoService } from '@agendamento/service/agendamentoService';

class Container {
  public readonly agendaService: AgendaService;
  public readonly agendamentoService: AgendamentoService;

  constructor() {
    const agendaRepository = new AgendaRepository();
    this.agendaService = new AgendaService(agendaRepository);
    this.agendamentoService = new AgendamentoService();
  }
}

export const container = new Container();
