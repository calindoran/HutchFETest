import { Injectable } from '@angular/core';
import { StaticData } from '../interfaces/responses/StaticData';
import { MockStaticData } from '../mockdata/StaticData';
import { Observable, of } from 'rxjs';

import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService extends ApiService {

  // constructor() { }

  getData(): Observable<StaticData> {
    return this.fetch(MockStaticData);
  }
}
