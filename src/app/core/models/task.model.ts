export interface TaskModel {
  id: string;
  titulo: string;
  descripcion: string;
  estado: string;
  fechaRegistro: string;
  userId?: string;
  tipo?: string;
}
