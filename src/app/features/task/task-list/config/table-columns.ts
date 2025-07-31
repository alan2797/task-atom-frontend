import { TaskModel } from '../../../../core/models/task.model';
import { TableColumns } from '../../../../shared/components/data-table/data-table.interface';

export const taskColumns: TableColumns<TaskModel> = [
  {
    headerName: 'Fecha Registro',
    field: 'fechaRegistro',
    type: 'date',
  },
  {
    headerName: 'Titulo',
    field: 'titulo',
    type: 'text',
  },
  {
    headerName: 'Descripcion',
    field: 'descripcion',
    type: 'text',
  },
  {
    headerName: 'Tipo/Categoria',
    field: 'tipo',
    type: 'text',
  },
  {
    headerName: 'Estado',
    field: 'estado',
    type: 'text',
  },
  {
    headerName: 'Acciones',
    field: 'actions',
    type: 'text',
  },
];
