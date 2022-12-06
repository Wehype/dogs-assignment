import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Dog } from '../../models/dog';

@Component({
  selector: 'dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsListComponent {
  @Input() dogs: Dog[] | undefined | null;
}
