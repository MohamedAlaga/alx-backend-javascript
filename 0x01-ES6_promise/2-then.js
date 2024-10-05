export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  if (promise instanceof Promise) {
    return promise.then(() => ({
      status: 200,
      body: 'success',
    })).catch(() => new Error());
  }
  return Promise.reject(new Error());
}
