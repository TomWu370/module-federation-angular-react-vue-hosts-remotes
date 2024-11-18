import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { AppRoutingModule } from './app-routing.module';
import { MatrixPageModule } from './pages/matrix-page/matrix-page.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { APP_BASE_HREF, KeyValuePipe } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { MatrixPageComponent } from './pages/matrix-page/matrix-page.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestModule,
    AppRoutingModule,
    MatrixPageModule,
		MatFormFieldModule,
		MatTableModule,
		MatSortModule
  ],
  bootstrap: [AppComponent, MatrixPageComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(AppComponent, { injector: injector });
    customElements.define('app-component', element);
  }
}
