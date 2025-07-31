import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableColumn, TableColumns } from './data-table.interface';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomColumnDirective } from '../../directives/custom-column.directive';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    SkeletonComponent,
    MatButtonModule,
    MatListModule,
    MatTooltipModule
  ],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements AfterViewInit, OnInit {
  private _rows?: any[];
  isListView = false;
  dataSource = new MatTableDataSource<any>();
  @Input({ required: true }) set rows(value: any) {
    this._rows = value;
    if (value) {
      this.dataSource.data = value;
      this.dataSource.filter = this.filter;
    }
  }
  @Input({ required: true }) columns!: TableColumns;
  @Output() refresh = new EventEmitter<void>();
  displayedColumns!: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ContentChildren(CustomColumnDirective)
  customColumns!: QueryList<CustomColumnDirective>;
  @Input() rowClass?: (item: any) => string;
  @Input() showPagination = true;
  @Input() class: string = '';
  @Input() showSearcher = true;
  @Input() filter = '';
  @Output() rowClick = new EventEmitter();

  get rows() {
    return this._rows;
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((column) => column.field);
    if (!this._rows) this.dataSource.data = Array(5).fill(0);
  }

  ngAfterViewInit() {
    if (this.showPagination) this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRefresh() {
    this.refresh.emit();
  }

  getValue(column: TableColumn, row: any) {
    return column.valueFormatter
      ? column.valueFormatter(row)
      : row[column.field];
  }

  getTemplateRef(column: TableColumn) {
    const customColumn = this.customColumns.find(
      (item) => item.field == column.field
    );
    return customColumn?.templateRef;
  }

  onRowClick(row: any) {
    this.rowClick.emit(row);
  }

  
}
