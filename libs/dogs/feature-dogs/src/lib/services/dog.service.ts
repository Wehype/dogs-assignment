import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Dog } from '../models/dog';
import { DogDetailComponent } from '../components/dog-detail/dog-detail.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  dogsApibaseUrl = '/api/dogs';
  detailDialog: MatDialog | null | any = null;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<DogDetailComponent>
  ) {}

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsApibaseUrl);
  }

  getDog(id: string): Observable<Dog> {
    return this.http.get<Dog>(`${this.dogsApibaseUrl}/${id}`);
  }

  openDetailDialog(): void {
    if (this.detailDialog?.componentInstance) {
      return;
    }
    this.detailDialog = this.dialog.open(DogDetailComponent, {
      width: '650px',
    });
    this.detailDialog.afterClosed().subscribe(() => {
      this.router.navigate(['.'], { relativeTo: this.route });
    });
  }
}
