import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import coffeeVarieties from '../../__mocks__/coffee-varieties.json';
import {ICoffeeVarieties} from 'src/app/interfaces/cofee-varieties';
import {CoffeeVarietiesService} from 'src/app/services/coffee-varieties.service';
import {of} from 'rxjs';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	const expectedCoffeeVarieties: ICoffeeVarieties[] = coffeeVarieties;
	let fakeCoffeeVarietiesService: CoffeeVarietiesService;

	beforeEach(async () => {
		fakeCoffeeVarietiesService = jasmine.createSpyObj<CoffeeVarietiesService>(
			'CoffeeVarietiesService',
			{
				getCoffeeVarieties: of(expectedCoffeeVarieties),
			}
		);

		await TestBed.configureTestingModule({
			declarations: [HomeComponent],
			providers: [
				{provide: CoffeeVarietiesService, useValue: fakeCoffeeVarietiesService},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('getCoffeeVarieties', () => {
		it('should be call setCoffeeVarieties by service', () => {
			const spySetCoffeeVarieties = spyOn(component, 'setCoffeeVarieties');
			component.getCoffeeVarieties();
			fixture.detectChanges();
			expect(spySetCoffeeVarieties).toHaveBeenCalled();
		});
	});

	describe('getTotalOriginCoffee', () => {
		it('should be call getTotalOriginCoffee by service', () => {
			const result: number = expectedCoffeeVarieties.filter(({tipo}) =>
				tipo.includes('Café de Origen')
			).length;
			expect(component.getTotalOriginCoffee()).toBe(result);
		});
	});

  describe('getTotalBlendCoffee', () => {
		it('should be call getTotalBlendCoffee by service', () => {
			const result: number = expectedCoffeeVarieties.filter(({tipo}) =>
				tipo.includes('Blend')
			).length;
			expect(component.getTotalBlendCoffee()).toBe(result);
		});
	});

	describe('setCoffeeVarieties', () => {
		it('should be change coffeeVarieties', () => {
			const otherCoffeeVarieties = [expectedCoffeeVarieties[0]];
			component.setCoffeeVarieties(otherCoffeeVarieties);
			fixture.detectChanges();
			expect(component.coffeeVarieties).toEqual(otherCoffeeVarieties);
		});
	});
});
