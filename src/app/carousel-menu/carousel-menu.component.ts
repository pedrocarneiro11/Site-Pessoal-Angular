import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-menu',
  templateUrl: './carousel-menu.component.html',
  styleUrls: ['./carousel-menu.component.css', './carousel-menu-responsive.component.css']
})
export class CarouselMenuComponent implements OnInit {

  constructor() { }

  ScrolltoLeft() {
    document.getElementById('carrousel').scrollBy(-5,0);
  }
  ScrolltoRight() {
    document.getElementById('carrousel').scrollBy(5,0);
  }

  ngOnInit(): void {
  }

}
