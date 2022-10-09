import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderWrapper } from './header-wrapper/header-wrapper.component';
import { container } from './container/container.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardLinkedinComponent } from './container/card-linkedin/card-linkedin.component'
import { cardGithub } from './container/cardGithub/cardGithub.component';
import { cardInstagram } from './container/cardInstagram/cardInstagram.component';
import { CarouselMenuComponent } from './carousel-menu/carousel-menu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [BrowserModule, FormsModule, NoopAnimationsModule],
  declarations: [AppComponent, HelloComponent, HeaderWrapper, container, cardGithub, CardLinkedinComponent, cardInstagram, CarouselMenuComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
