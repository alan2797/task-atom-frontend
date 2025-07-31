import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../features/home/topbar/topbar.component';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  getToken() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded;
    } else {
      return null;
    }
  }
}
