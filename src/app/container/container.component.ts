import { Component, Input } from '@angular/core';
import { cardGithub } from './cardGithub/cardGithub.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})

export class container {
  @Input() name: string;
}
