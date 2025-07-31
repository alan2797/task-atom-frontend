import { environment } from '../../../environments/environments';

const BASE_URL = environment.apiUrl; //TODO: definir variables de entorno

export const API = {
  AUTH: {
    LOGIN: `${BASE_URL}/users`,
    CREATE: `${BASE_URL}/users`,
    EXIST: `${BASE_URL}/users/exists`,
  },
  TASK: {
    GET_ALL: `${BASE_URL}/tasks`,
  },
};
