import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Dog } from '../../models/dog';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'dogs-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogDetailComponent {
  loading$ = new BehaviorSubject(false);
  dogDetails$: Observable<Dog> = this.getDogById();

  constructor(private dogService: DogService, private route: ActivatedRoute) {}

  getDogById(): Observable<Dog> {
    // get id from query params and fetch dog details based on its id
    this.loading$.next(true);
    return this.route.queryParams.pipe(
      switchMap((param) => this.dogService.getDog(param['id'])),
      tap(() => this.loading$.next(false))
    );
  }
}
