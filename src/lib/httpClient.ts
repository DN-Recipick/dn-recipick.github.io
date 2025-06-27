import request from '@/lib/request';
import type { HttpClient } from '@/types/api';

const httpClient: HttpClient = {
  get: (endpoint, options) => request('GET', endpoint, undefined, options),
  post: (endpoint, data = undefined, options) => request('POST', endpoint, data, options),
  put: (endpoint, data = undefined, options) => request('PUT', endpoint, data, options),
  patch: (endpoint, data = undefined, options) => request('PATCH', endpoint, data, options),
  delete: (endpoint, data = undefined, options) => request('DELETE', endpoint, data, options),
};
export default httpClient;
