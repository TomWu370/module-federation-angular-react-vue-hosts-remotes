import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatrixPageComponent } from './pages/matrix-page/matrix-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'test-page',
    component: TestComponent
  },
	{
    path: '',
    component: MatrixPageComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/matrix-page/matrix-page.module').then(m => m.MatrixPageModule)}
    ]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
