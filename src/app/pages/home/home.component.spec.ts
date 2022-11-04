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
		it('should be call setMuseums by service', () => {
			const spySetMuseums = spyOn(component, 'setCoffeeVarieties');
			component.getCoffeeVarieties();
			fixture.detectChanges();
			expect(spySetMuseums).toHaveBeenCalled();
		});
	});

	describe('setMuseums', () => {
		it('should be change museums', () => {
			const otherMuseum = [expectedCoffeeVarieties[0]];
			component.setCoffeeVarieties(otherMuseum);
			fixture.detectChanges();
			expect(component.coffeeVarieties).toEqual(otherMuseum);
		});
	});
});
