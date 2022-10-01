import { Component, Input } from '@angular/core';

@Component({
  selector: 'headerWrapper',
  templateUrl: './header-wrapper.component.html',
  styleUrls: ['./header-wrapper.component.css'],
})
export class HeaderWrapper {
  @Input() name: string;
}
