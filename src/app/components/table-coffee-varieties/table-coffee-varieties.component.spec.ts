import {DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ICoffeeVarieties} from 'src/app/interfaces/cofee-varieties';
import coffeeVarieties from '../../__mocks__/coffee-varieties.json';

import {TableCoffeeVarietiesComponent} from './table-coffee-varieties.component';

describe('TableCoffeeVarietiesComponent', () => {
	let component: TableCoffeeVarietiesComponent;
	let fixture: ComponentFixture<TableCoffeeVarietiesComponent>;
	const expectedCoffeeVarieties: ICoffeeVarieties[] = coffeeVarieties;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TableCoffeeVarietiesComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TableCoffeeVarietiesComponent);
		component = fixture.componentInstance;
		component.coffeeVarieties = expectedCoffeeVarieties;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('coffeeVarieties', () => {
		let elementBodyList: DebugElement;
		let elementListTr: DebugElement[];
		beforeEach(() => {
			elementBodyList = fixture.debugElement.query(
				By.css('.body-list-coffee-varietie')
			);
			elementListTr = fixture.debugElement.queryAll(
				By.css('.list-coffee-varietie')
			);
		});

		it('should coffeeVarieties return expectedCoffeeVarieties', () => {
			expect(component.coffeeVarieties).toEqual(expectedCoffeeVarieties);
		});

		it('should be containt 6 elements', () => {
			expect(elementBodyList.nativeElement.children.length).toBe(
				expectedCoffeeVarieties.length
			);
		});

		const testCases = expectedCoffeeVarieties;

		testCases.forEach((testCoffeeVarieties, index) => {
			it(`should be containt column 1 id ${testCoffeeVarieties.id}`, () => {
				expect(elementListTr[index].nativeElement.children[0].textContent).toEqual(
					`${testCoffeeVarieties.id}`
				);
			});

      it(`should be containt column 2 name ${testCoffeeVarieties.nombre}`, () => {
				expect(elementListTr[index].nativeElement.children[1].textContent).toEqual(
					testCoffeeVarieties.nombre
				);
			});

      it(`should be containt column 3 type ${testCoffeeVarieties.tipo}`, () => {
				expect(elementListTr[index].nativeElement.children[2].textContent).toEqual(
					testCoffeeVarieties.tipo
				);
			});

      it(`should be containt column 4 region ${testCoffeeVarieties.region}`, () => {
				expect(elementListTr[index].nativeElement.children[3].textContent).toEqual(
					testCoffeeVarieties.region
				);
			});
		});
	});
});
