import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from '../../shared/utils/response';
import { TaskModel } from '../models/task.model';
import { API } from '../../shared/constants/api.constant';
import { formatDate } from '../../shared/utils/format-date';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient, private _tokenService: TokenService) {}

  getAll(): Observable<ResponseDto<TaskModel[]>> {
    let userId = this._tokenService.getToken()?.id;
    return this.http.get<ResponseDto<TaskModel[]>>(
      `${API.TASK.GET_ALL}/${userId}`
    );
  }

  create(task: TaskModel): Observable<ResponseDto<boolean>> {
    task.fechaRegistro = formatDate();
    task.estado = 'Pendiente';
    task.userId = this._tokenService.getToken()?.id;
    return this.http.post<ResponseDto<boolean>>(API.TASK.GET_ALL, task);
  }

  edit(id: string, task: Partial<TaskModel>): Observable<ResponseDto<boolean>> {
    return this.http.put<ResponseDto<boolean>>(
      `${API.TASK.GET_ALL}/${id}`,
      task
    );
  }

  remove(id: string): Observable<ResponseDto<boolean>> {
    return this.http.delete<ResponseDto<boolean>>(`${API.TASK.GET_ALL}/${id}`);
  }
}
