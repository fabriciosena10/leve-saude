const apiResponse = {
  _200: (body: unknown) => {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
  },
  _201: (body: unknown) => {
    return {
      statusCode: 201,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
  },
  _400: (body: unknown) => {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
  },
  _500: (body: unknown) => {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
  },
};

export default apiResponse;
