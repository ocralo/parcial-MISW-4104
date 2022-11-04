import {TestBed} from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

import {CoffeeVarietiesService} from './coffee-varieties.service';
import {ICoffeeVarieties} from '../interfaces/cofee-varieties';
import coffeeVarieties from '../__mocks__/coffee-varieties.json';

describe('CoffeeVarietiesService', () => {
	let service: CoffeeVarietiesService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [CoffeeVarietiesService],
		});
		service = TestBed.inject(CoffeeVarietiesService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('getCoffeeVarieties', () => {
		it('should return an Observable<ICoffeeVarieties[]>', () => {
			const expectedCoffeeVarieties: ICoffeeVarieties[] = coffeeVarieties;

			service.getCoffeeVarieties().subscribe((coffeeVarieties) => {
				expect(coffeeVarieties).toEqual(expectedCoffeeVarieties);
			});

			const req = httpMock.expectOne(service.apiUrl);
			expect(req.request.method).toBe('GET');
			req.flush(expectedCoffeeVarieties);
		});
	});
});
