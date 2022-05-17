import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor() { }

  getAddress(){
    let addr={
      area: 'baner',
      pincode:3131,
      locality:'tower'
    };
  }

  getCompanyName(){
    return 'T-Systems'
  }
}
