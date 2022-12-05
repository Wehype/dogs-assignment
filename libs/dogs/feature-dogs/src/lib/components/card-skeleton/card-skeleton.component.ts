import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dogs-card-skeleton',
  templateUrl: './card-skeleton.component.html',
  styleUrls: ['./card-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSkeletonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
