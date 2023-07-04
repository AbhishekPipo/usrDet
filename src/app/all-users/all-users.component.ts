import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {


  constructor(private userService: UserService){}
users:  {
  name: string,
  job: string,
  country: string,
  age: number,
  avatar: string,
  gender: string
}[]=[]


ngOnInit():void{
  this.users=this.userService.users;
}


ShowDet(user: {
  name: string,
  job: string,
  country: string,
  age: number,
  avatar: string,
  gender: string
}){


this.userService.showUserDet(user);
}
}
