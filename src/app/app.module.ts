import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeroImageComponent} from './components/hero-image/hero-image.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {TableCoffeeVarietiesComponent} from './components/table-coffee-varieties/table-coffee-varieties.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		HeroImageComponent,
		FooterComponent,
		TableCoffeeVarietiesComponent,
	],
	imports: [HttpClientModule, BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
