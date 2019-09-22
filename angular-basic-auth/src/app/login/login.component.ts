import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatonService } from '../authenticaton.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username :String;
  password: String;

  invalidLogin = false;
  loginSuccess = false;

  errorMessage = 'Invalid Credentials';

  constructor(private route: ActivatedRoute, private router: Router,
    private authenticationService: AuthenticatonService) { }

  ngOnInit() {
  }

  validateLogin(){
      this.authenticationService.authenticate(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.router.navigate(['/welcome']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }

}
