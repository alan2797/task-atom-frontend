
import { TaskModel } from "../../../../core/models/task.model";
import { TableColumns } from "../../../../shared/components/data-table/data-table.interface";


export const taskColumns: TableColumns<TaskModel> = [
  {
    headerName: 'Id',
    field: 'id',
    type: "text"
  },
  {
    headerName: 'Titulo',
    field: 'titulo',
    type: "text"
  },
  {
    headerName: 'Descripcion',
    field: 'descripcion',
    type: "text"
  },
  {
    headerName: 'Estado',
    field: 'estado',
    type: "text"
  },
  {
    headerName: 'Fecha Registro',
    field: 'fechaRegistro',
    type: "date"
  },
  {
    headerName: 'Acciones',
    field: 'actions',
    type: "text"
  },
];
