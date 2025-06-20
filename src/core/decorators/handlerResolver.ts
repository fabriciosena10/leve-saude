import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda';
import apiResponse from '@utils/apiResponse';

export function handlerResolver(
  handlerFn: (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>,
): Handler {
  return async (
    event: APIGatewayProxyEvent,
  ): Promise<APIGatewayProxyResult> => {
    try {
      return await handlerFn(event);
    } catch (error) {
      console.error('Unhandled error:', error);
      return apiResponse._500({ message: 'Internal Server Error' });
    }
  };
}
