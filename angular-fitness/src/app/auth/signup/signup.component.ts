import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router: Router){

  }

  ngOnInit(): void{

  }

  onSubmit(form : NgForm){
    //console.log(form);
    if(!this.userService.getUser(form.value.email)){
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.forename, form.value.surname, form.value.email, form.value.password, form.value.phone, form.value.address);
      this.router.navigate(['']);
      alert("You successfully signed up ");
    } else {
      this.errorExists = true;
      this.errorText = "User with this email already exists.";
    }
  }
}
