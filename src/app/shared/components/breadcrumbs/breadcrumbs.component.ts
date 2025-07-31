import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PAGE_ROUTE } from '../../constants/page-routes.constant';
import { Breadcrumbs } from './breadcrumbs.interface';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  pageRoutes = PAGE_ROUTE;
  @Input({ required: true }) breadcrumbs!: Breadcrumbs;
}
