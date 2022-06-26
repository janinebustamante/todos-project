import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (event.pathParameters === null) {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  const { id } = event.pathParameters;

  if (id === undefined) {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Deleting todo with id ${id}`,
    }),
  };
};
