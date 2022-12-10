import { Component, NgModule, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-carousel-menu',
  templateUrl: './carousel-menu.component.html',
  styleUrls: ['./carousel-menu.component.css', './carousel-menu-responsive.component.css'],

})

export class CarouselMenuComponent implements OnInit {
  count: number = 0;

  constructor() {}

  ScrolltoLeft() {

    if(this.count == 0 ) {
      this.count = 6;
    } else {
      this.count = this.count - 1;
      console.log("scroll para esquerda");
    }

    console.log(this.count);
  }
  ScrolltoRight() {

    if(this.count == 6) {
      this.count = 0;
    } else {
      this.count = this.count + 1;
      console.log("scroll para direita");
    }
    console.log(this.count);
  }

  ngOnInit(): void {}
}
