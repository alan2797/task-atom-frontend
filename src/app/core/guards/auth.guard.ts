import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const token = sessionStorage.getItem('token');
    console.log('entro a guard');
    if (token) {
      // Opcional: aquí podrías validar expiración del token (decodificándolo)
      return true;
    }

    // No token, redirigir a login
    return this.router.createUrlTree(['/auth/login']);
  }
}
