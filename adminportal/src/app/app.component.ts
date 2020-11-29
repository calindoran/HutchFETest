import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Observable, Subject } from 'rxjs';
import { HutchApiError } from './interfaces/responses/api-error';
import { ApiErrorService } from './services/api-error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Hutch FE Test - Admin Portal';
  auth: Observable<boolean>;
  destroy = new Subject<void>();
  error: Observable<HutchApiError>;

  constructor(
    public errorService: ApiErrorService,
    private authService: AuthService
  ){

  }

  ngOnInit(){
    this.authService.restoreAuthState();
    this.auth = this.authService.authChanges;
    this.error = this.errorService.errorChanges;
  }

  ngOnDestroy(){
    this.destroy.next();
  }
}
