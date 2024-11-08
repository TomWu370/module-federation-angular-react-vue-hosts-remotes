import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatrixPageComponent } from './pages/matrix-page/matrix-page.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'matrix-page',
				component: MatrixPageComponent,
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
