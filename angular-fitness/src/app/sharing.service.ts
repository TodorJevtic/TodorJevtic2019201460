import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Trips } from './trips/trips.model';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  subject2 = new Subject()

  constructor() { }

  sendMsg(trips : Trips) {
    this.subject2.next(trips) 
  }

  getMsg() {
    return this.subject2.asObservable()
  }
}
