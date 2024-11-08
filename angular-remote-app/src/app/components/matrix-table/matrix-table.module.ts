import { Injector, NgModule } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { MatrixTableComponent } from './matrix-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

@NgModule({
	declarations: [
		MatrixTableComponent
	],
	imports: [
		MatTableModule,
		MatTooltipModule,
		MatButtonModule,
		MatPaginatorModule,
		MatFormFieldModule,
		MatInputModule,
		MatSortModule,
		MatSelectModule,
    RouterModule
	],
	exports: [MatrixTableComponent],
	providers: [{ provide: KeyValuePipe, useClass: KeyValuePipe }]
})
export class MatrixTableModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(MatrixTableComponent, { injector: injector });
    customElements.define('matrix-table-component', element);
  }
}

