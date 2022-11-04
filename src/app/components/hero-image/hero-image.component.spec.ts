import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroImageComponent} from './hero-image.component';

describe('HeroImageComponent', () => {
	let component: HeroImageComponent;
	let fixture: ComponentFixture<HeroImageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeroImageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeroImageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('Hero image', () => {
		it('should render the image', () => {
			const fixture = TestBed.createComponent(HeroImageComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('.image-hero').src).toContain(
				'/assets/images/hero-home.jpg'
			);
		});
	});
});
