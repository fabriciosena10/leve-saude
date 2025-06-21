import { AgendaService } from '@agenda/service/agendaService';
import { AgendaRepository } from '@agenda/repository/agendaRepository';
import { MEDICOS_MOCK } from '@agenda/mocks/medicoMock';

jest.mock('@agenda/repository/agendaRepository');

describe('AgendaService', () => {
  let agendaService: AgendaService;
  let agendaRepository: jest.Mocked<AgendaRepository>;

  beforeEach(() => {
    agendaRepository = new AgendaRepository() as jest.Mocked<AgendaRepository>;
    agendaService = new AgendaService(agendaRepository);
  });

  it('deve ser definido', () => {
    expect(agendaService).toBeDefined();
  });

  describe('getAgendas', () => {
    it('deve retornar uma lista de médicos com seus horários', async () => {
      const mockDeRetorno = MEDICOS_MOCK;
      agendaRepository.findAll.mockResolvedValue(mockDeRetorno);

      const resultado = await agendaService.getAgendas();

      expect(resultado).toEqual({ medicos: mockDeRetorno });
      expect(agendaRepository.findAll).toHaveBeenCalledTimes(1);
    });
  });
});
