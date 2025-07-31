// Respuesta generica
// TODO: cambiar fields en base al servicio
export interface ResponseDto<T> {
  status: number;
  message: string;
  data: T;
}
