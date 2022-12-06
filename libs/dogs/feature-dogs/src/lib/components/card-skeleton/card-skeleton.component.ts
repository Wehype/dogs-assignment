import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dogs-card-skeleton',
  templateUrl: './card-skeleton.component.html',
  styleUrls: ['./card-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSkeletonComponent {}
