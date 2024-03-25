export type Interception = {
  id: string;
  method: "GET" | "PUT" | "POST";
  path: string;
  response: {
    body: unknown;
    statusCode: number;
  };
};

export const registerInterceptor = ({ method, path, response, id }: Interception) => {
  cy.intercept(method, path, response).as(id);
};

export const getByTestId = (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
};
