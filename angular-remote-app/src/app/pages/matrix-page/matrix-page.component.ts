import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'matrix-page',
	templateUrl: './matrix-page.component.html',
	styleUrls: []
})
export class MatrixPageComponent implements OnInit {

	constructor(private activatedRoute: ActivatedRoute) {}
	public ngOnInit(): void {

	}
}
