import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
constructor(private userService: UserService){

}


  user: {
    name: string;
    job: string;
    country: string;
    age: number;
    avatar: string;
    gender: string;
  } = {
    name: '',
    job: '',
    country: '',
    age: 0,
    avatar: '',
    gender: '',
  };

  ngOnInit() {
    this.userService.OnShowDetClicked.subscribe((data: {
      name: string;
      job: string;
      country: string;
      age: number;
      avatar: string;
      gender: string;
    })=>{
      this.user = data;
    });
  }
  

}
