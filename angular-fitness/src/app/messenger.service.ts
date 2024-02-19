import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Trips } from './trips/trips.model'; 

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(trips : Trips) {
    this.subject.next(trips) 
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
