import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import User from 'src/app/entity/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  title = "Fill all the fields below "
  user: User = new User();

  Users: User[] = [];

  save() {

    const observable = this.userService.createUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("Something went wrong, Please try again!");
      }   
   )
   
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response) => {  
    console.log(response);
      this.Users = response as User[];
    })
  }

}
