import { Component, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-version-info',
  templateUrl: './version-info.component.html',
  styleUrls: ['./version-info.component.css']
})
export class VersionInfoComponent implements OnInit, OnDestroy {
  ver = environment.name;
  apiVersion: number;
  dataVersion: number;

  destroy = new Subject<void>();

  apiVersions = [1,2];
  dataVersions = [10, 20];

  constructor(private versionService: VersionService) { }

  ngOnInit(): void {
    const ver = this.versionService.apiVersionChanges.pipe(
      tap(v => this.apiVersion = v),
    );
    
    const data = this.versionService.dataVersionChanges.pipe(
      tap(v => this.dataVersion = v),
    );

    merge(ver, data).pipe(
      takeUntil(this.destroy)
    ).subscribe();
  }

  ngOnDestroy(){
    this.destroy.next();
  }

  onApiVersionChange(val: number){
    this.versionService.setApiVersion(val);
  }

  onDataVersionChange(val: number){
    this.versionService.setDataVersion(val);
  }

}
