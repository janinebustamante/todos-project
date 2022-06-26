import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

type RequestBody = {
  text?: string;
};

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  const { text }: RequestBody = JSON.parse(event.body);

  if (text === undefined) {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Creating ${text} todo`,
    }),
  };
};
