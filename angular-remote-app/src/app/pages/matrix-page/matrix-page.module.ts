import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixPageComponent } from './matrix-page.component';
import { MatrixTableModule } from 'src/app/components/matrix-table/matrix-table.module';
import { createCustomElement } from '@angular/elements';

@NgModule({
	declarations: [
		MatrixPageComponent
	],
	imports: [
		CommonModule,
		MatrixTableModule
	],
  bootstrap: [MatrixPageComponent],
	exports: [MatrixPageComponent]
})
export class MatrixPageModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(MatrixPageComponent, { injector: injector });
    if (!customElements.get('matrix-page-component')) { customElements.define('matrix-page-component', element); }
  }
}
