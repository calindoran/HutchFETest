import { Injectable } from '@angular/core';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { MockPortalSync } from '../mockdata/PortalSync';
import { from, Observable, of } from 'rxjs';

import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PortalSyncService extends ApiService {

  // constructor() { }

  getData(): Observable<PortalSync> {
    return this.fetch(MockPortalSync);
  }
}
