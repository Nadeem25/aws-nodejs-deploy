import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public userList: any[] = [];

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getAllUserDetails().subscribe((response) => {
      console.log(`[userDashboardComponent] response: ${JSON.stringify(response)}`);
      this.userList = response;
    });
  }

  backToLogin() {
    this.router.navigate(['login'])
  }
 
}
