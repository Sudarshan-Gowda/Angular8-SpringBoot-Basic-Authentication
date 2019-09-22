import { Component, OnInit } from '@angular/core';
import { AuthenticatonService } from '../authenticaton.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private userName: String;

  constructor(private authenticationService: AuthenticatonService) { }

  ngOnInit() {
    this.userName = this.authenticationService.getLoggedInUserName();
  }

  

}
