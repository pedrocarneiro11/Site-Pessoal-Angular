import { Component, Input } from '@angular/core';

@Component({
  selector: 'headerWrapper',
  templateUrl: './header-wrapper.component.html',
  styleUrls: ['./header-wrapper.component.css', './header-wrapper.responsive.component.css'],
})
export class HeaderWrapper {
  @Input() name: string;
}
