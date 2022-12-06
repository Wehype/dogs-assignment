import {
  BehaviorSubject,
  Observable,
  Subscription,
  combineLatest,
  map,
  of,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Dog } from '../../models/dog';
import { DogService } from '../../services/dog.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dogs-container',
  templateUrl: './dogs-container.component.html',
  styleUrls: ['./dogs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsContainerComponent implements OnDestroy {
  searchForm: FormControl = new FormControl('');

  loading$ = new BehaviorSubject(false);

  routeQueryParams$: Subscription;

  dogs$: Observable<Dog[]> = this.dogService.getDogs().pipe(shareReplay(1));

  filteredDogs$: Observable<Dog[]> = this.getFilteredDogs();

  constructor(private dogService: DogService, private route: ActivatedRoute) {
    this.routeQueryParams$ = route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.dogService.openDetailDialog();
      }
    });
  }

  getFilteredDogs(): Observable<Dog[]> {
    //get search term and filter dogs list based on search term
    this.loading$.next(true);
    return this.searchForm.valueChanges.pipe(
      startWith(''),
      switchMap((searchTerm) => combineLatest([this.dogs$, of(searchTerm)])),
      map(([dogs, searchTerm]) => {
        this.loading$.next(false);
        return dogs.filter((dog) =>
          dog?.name?.toLowerCase().startsWith(searchTerm?.toLowerCase())
        );
      })
    );
  }

  resetSearchForm(): void {
    //reset form value
    this.searchForm.setValue('');
  }
  ngOnDestroy(): void {
    //unsubscribe from the query params subscription when component is destroyed
    this.routeQueryParams$.unsubscribe();
  }
}
