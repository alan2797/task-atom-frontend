import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from '../../shared/utils/response';
import { TaskModel } from '../models/task.model';
import { API } from '../../shared/constants/api.constant';
import { formatDate } from '../../shared/utils/format-date';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  existUser(
    correo: string
  ): Observable<ResponseDto<boolean | number | string>> {
    return this.http.get<ResponseDto<boolean>>(`${API.AUTH.EXIST}/${correo}`);
  }

  create(user: UserModel): Observable<ResponseDto<boolean | string>> {
    return this.http.post<ResponseDto<boolean>>(API.AUTH.CREATE, user);
  }
}
