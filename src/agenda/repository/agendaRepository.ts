import { Medico } from '@agenda/interface/medicoInterface';
import { MEDICOS_MOCK } from '@agenda/mocks/medicoMock';

export class AgendaRepository {
  async findAll(): Promise<Medico[]> {
    return Promise.resolve(MEDICOS_MOCK);
  }
}
