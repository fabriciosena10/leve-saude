import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda';
import { ZodError, ZodSchema } from 'zod';
import apiResponse from '@utils/apiResponse';

interface HandlerOptions<B> {
  bodySchema?: ZodSchema<B>;
}

export function handlerResolver<B = unknown>(
  handlerFn: (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>,
  options?: HandlerOptions<B>,
): Handler {
  return async (
    event: APIGatewayProxyEvent,
  ): Promise<APIGatewayProxyResult> => {
    try {
      if (options?.bodySchema) {
        const body = event.body ? JSON.parse(event.body) : {};
        options.bodySchema.parse(body);
      }

      return await handlerFn(event);
    } catch (error) {
      if (error instanceof ZodError) {
        return apiResponse._400({
          message: 'Erro de validação no payload',
          errors: error.errors,
        });
      }

      console.error('Unhandled error:', error);
      return apiResponse._500({ message: 'Internal Server Error' });
    }
  };
}
