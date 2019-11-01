import { Component } from '@angular/core';

import { VerifyuserService } from "../services/verifyuser.service";
@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.css']
})
export class VerifyuserComponent {

  text = 'user page';
  users;

  constructor(private verifyUserervice: VerifyuserService) {
    this.users = this.verifyUserervice.getUsers();
  }

}
