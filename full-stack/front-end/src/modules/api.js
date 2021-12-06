const basePath = '/api';

export const API = async(method, path, payload) => {
  const url = `${basePath}${path}`;

  const options = {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  if (payload) options.body = JSON.stringify(payload);

  const response = await fetch(url, options);
  return response.json();
}
