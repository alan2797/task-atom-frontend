import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { NgOptimizedImage } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
  id: string;
  correo: string;
  exp: number; // fecha expiración en timestamp UNIX (segundos)
  iat?: number; // fecha emisión (opcional)
  // otros claims que uses
}

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    NgOptimizedImage,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  correo: string = '';

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.leerToken();
  }

  leerToken() {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        this.correo = decoded.correo;
      } catch (error) {
        console.error('Token inválido o corrupto');
      }
    }
  }

  cerrarSesion() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: {
        title: 'Confirmar',
        message: '¿esta seguro de cerrar sesión?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuario presionó "Aceptar"');
        sessionStorage.removeItem('token');
        this.router.navigate(['auth/login']);
      }
    });
  }
}
