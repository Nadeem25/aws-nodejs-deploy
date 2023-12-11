import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { UNAUTHORIZE, WECLOME_MESSAGE } from '../constant';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup | any;

  constructor(
    private readonly loginFormBuilder: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.loginFormBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  login() {
    const formData = this.loginForm.value;
    this.userService.login(formData.username, formData.password).subscribe((response) => {
      console.log(`[loginComponent] response: ${JSON.stringify(response)}`);
      if(response.statusCode === 200) {
        this.loginForm.reset();
        this.router.navigate(['user-dashboard']);
      } else {
        this.loginForm.reset();
        this.router.navigate(['sign-up']);
      }
    })
  }

}
