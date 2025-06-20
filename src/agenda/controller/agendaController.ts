import { handlerResolver } from '@core/decorators/handlerResolver';
import { container } from '@core/di/container';
import apiResponse from '@utils/apiResponse';

const getAgendasHandler = async () => {
  const agendaService = container.agendaService;
  const result = await agendaService.getAgendas();
  return apiResponse._200(result);
};

export const getAgendas = handlerResolver(getAgendasHandler);
