import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixPageComponent } from './matrix-page.component';
import { MatrixTableModule } from 'src/app/components/matrix-table/matrix-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

@NgModule({
	declarations: [
		MatrixPageComponent
	],
	imports: [
		CommonModule,
		MatrixTableModule,
    	BrowserModule
	],
  bootstrap: [MatrixPageComponent],
	exports: [MatrixPageComponent]
})
export class MatrixPageModule { }
