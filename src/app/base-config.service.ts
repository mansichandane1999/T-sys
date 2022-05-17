import { Injectable } from '@angular/core';
import { UserprofileService } from './userprofile.service';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  constructor(private user:UserprofileService)
     { }
     url="www.something"
}
