import {DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {FooterComponent} from './footer.component';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;
	let element: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FooterComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('Footer text', () => {
		beforeEach(() => {
			element = fixture.debugElement.query(By.css('.footer-text'));
		});

		it('should be containt El aroma mágico', () => {
			expect(element.nativeElement.textContent.trim()).toBe(
				'Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico'
			);
		});
	});
});
