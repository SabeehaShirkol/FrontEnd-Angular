import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // Firstname = "";
  // Lastname = "";
  // age = 0;

  title = "Fill all the fields below "
  userDetails = {
    firstname:"",
    lastname:"",
    age:0
  }

  save() {
    console.log(this.userDetails.firstname + " " +this.userDetails.lastname);
    console.log("The age of this user is " +this.userDetails.age);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
