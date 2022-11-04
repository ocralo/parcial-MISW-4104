import {Component, OnInit} from '@angular/core';
import {ICoffeeVarieties} from 'src/app/interfaces/cofee-varieties';
import {CoffeeVarietiesService} from 'src/app/services/coffee-varieties.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	coffeeVarieties: ICoffeeVarieties[] = [];

	constructor(private coffeeVarietiesService: CoffeeVarietiesService) {}

	getCoffeeVarieties(): void {
		this.coffeeVarietiesService
			.getCoffeeVarieties()
			.subscribe(this.setCoffeeVarieties.bind(this));
	}

	setCoffeeVarieties(coffeeVarieties: ICoffeeVarieties[]) {
		this.coffeeVarieties = coffeeVarieties;
	}

	getTotalOriginCoffee() {
		return this.coffeeVarieties.filter(({tipo}) =>
			tipo.includes('Café de Origen')
		).length;
	}

	getTotalBlendCoffee() {
		return this.coffeeVarieties.filter(({tipo}) => tipo.includes('Blend'))
			.length;
	}

	ngOnInit(): void {
		this.getCoffeeVarieties();
	}
}
