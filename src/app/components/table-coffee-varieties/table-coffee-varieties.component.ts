import {Component, Input, OnInit} from '@angular/core';
import {ICoffeeVarieties} from 'src/app/interfaces/cofee-varieties';

@Component({
	selector: 'app-table-coffee-varieties',
	templateUrl: './table-coffee-varieties.component.html',
	styleUrls: ['./table-coffee-varieties.component.scss'],
})
export class TableCoffeeVarietiesComponent implements OnInit {
	@Input() coffeeVarieties: ICoffeeVarieties[] = [];

	constructor() {}

	ngOnInit(): void {}
}
