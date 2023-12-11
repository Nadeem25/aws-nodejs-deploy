import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { USER_CREATED } from '../constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public signupForm: FormGroup | any;

  constructor(
    private readonly loginFormBuilder: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.loginFormBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  signUp() {
    const formData = this.signupForm.value;
    this.userService.singup(formData.name, formData.username, formData.password).subscribe((response) => {
      console.log(`[singupComponent] response: ${JSON.stringify(response)}`);
      if(response.statusCode === 200) {
        this.signupForm.reset();
        this.router.navigate(['login']);
      }
    })
  }

}
