import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OrderService {
  private message: string = 'asc';

  private messageSource = new BehaviorSubject<string>(this.message);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

}