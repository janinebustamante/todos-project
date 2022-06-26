import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

type RequestBody = {
  text?: string;
  isComplete?: boolean;
};

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

  if (event.body === null) {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  const { text, isComplete }: RequestBody = JSON.parse(event.body);

  if (text === undefined && isComplete === undefined) {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  const attributesToUpdate: { text?: string; isComplete?: boolean } = {};

  if (text !== undefined) {
    attributesToUpdate.text = text;
  }

  if (isComplete !== undefined) {
    attributesToUpdate.isComplete = isComplete;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Updating todo ${id} with attributes ${JSON.stringify(
        attributesToUpdate
      )}`,
    }),
  };
};
