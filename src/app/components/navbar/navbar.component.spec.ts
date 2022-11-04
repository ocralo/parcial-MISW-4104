import {DebugElement} from '@angular/core';
import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from 'src/app/pages/home/home.component';

import {NavbarComponent} from './navbar.component';

describe('NavbarComponent', () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;
	let element: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavbarComponent],
			imports: [RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('Navbar text', () => {
		beforeEach(() => {
			element = fixture.debugElement.query(By.css('.navbar-brand-text'));
		});

		it('should be containt El aroma mágico', () => {
			expect(element.nativeElement.textContent.trim()).toBe('El aroma mágico');
		});

		it('should be containt El aroma mágico', () => {
			expect(element.nativeElement.getAttribute('href')).toBe('/');
		});
	});
});
