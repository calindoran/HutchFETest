import { Injectable } from '@angular/core';
import { ApiErrorService } from './api-error.service';
import { of } from 'rxjs';
import { HutchApiError } from '../interfaces/responses/api-error';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private errorService: ApiErrorService) {

  }
  protected fetch(data: any) {
    return of(data).pipe(
      catchError((err: HutchApiError) => {
        this.errorService.setError(err);
        return data;
      })
    );
  }
}
