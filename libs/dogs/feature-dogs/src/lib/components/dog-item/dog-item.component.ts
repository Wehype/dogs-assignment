import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Dog } from '../../models/dog';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'dogs-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogItemComponent {
  @Input() dog: Dog | undefined | null;

  constructor(public dogService: DogService) {}
}
