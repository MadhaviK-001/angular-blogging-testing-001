import { Injectable } from '@angular/core';

@Injectable()
export class VerifyuserService {

  constructor() { }

  getUsers(): Array<{}> {
      return [
          {
              name: 'user1',
              surname: 'usersurname1'
          },
          {
              name: 'user2',
              surname: 'usersurname2'
          }
      ];
  }

}