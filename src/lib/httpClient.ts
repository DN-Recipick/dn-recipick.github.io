import request from '@/lib/request';
import type { HttpClient } from '@/types/api';

const httpClient: HttpClient = {
  get: (endpoint, options) => request({ method: 'GET', endpoint, options }),
  post: (endpoint, data, options) => request({ method: 'POST', endpoint, data, options }),
  put: (endpoint, data, options) => request({ method: 'PUT', endpoint, data, options }),
  patch: (endpoint, data, options) => request({ method: 'PATCH', endpoint, data, options }),
  delete: (endpoint, data, options) => request({ method: 'DELETE', endpoint, data, options }),
};
export default httpClient;
