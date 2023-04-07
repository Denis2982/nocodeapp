import { Component } from '@angular/core';

import { blocks } from '../blocks';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  blocks = blocks;
}
