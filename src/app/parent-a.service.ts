import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentAService {

  constructor() { }

  getData() {
    return 'data';
  }
}
