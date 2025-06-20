import { APIGatewayProxyEvent } from 'aws-lambda';
import { handlerResolver } from '@core/decorators/handlerResolver';
import { container } from '@core/di/container';
import apiResponse from '@utils/apiResponse';
import { CreateAgendamentoSchema } from '@agendamento/dto/createAgendamentoDto';

const createAgendamentoHandler = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body!);
  const agendamentoService = container.agendamentoService;
  const result = await agendamentoService.createAgendamento(body);
  return apiResponse._201(result);
};

export const createAgendamento = handlerResolver(createAgendamentoHandler, {
  bodySchema: CreateAgendamentoSchema,
});
