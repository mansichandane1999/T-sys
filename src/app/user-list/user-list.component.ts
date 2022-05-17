import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { BaseConfigService } from '../base-config.service';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private key3:BaseConfigService) {
    console.log(url);
   }

  ngOnInit(): void {
    
  }

}
