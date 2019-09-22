import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatonService {

  public username: String;
  public password: String;

  USER_SESSION_ATTR = 'authenticatedUser'

  constructor(private http: HttpClient) { }

  authenticate(username:String, password:String){
    return this.http.get(`http://localhost:8080/api/authenticate`,
    {
      headers:{
        authorization: this.createBasicAuthorizationToken(username, password)
      }
    }
    ).pipe(map((res) =>{
       this.username =username;
       this.password =password;
       this.registerSuccessfulLogin(username, password);
    }))
  }


  createBasicAuthorizationToken(username: String, password:String){
    return 'Basic '+window.btoa(username+":"+password)
  }

  registerSuccessfulLogin(username, password){
    sessionStorage.setItem(this.USER_SESSION_ATTR, username)
  }

  logout(){
    sessionStorage.removeItem(this.USER_SESSION_ATTR);
    this.username =null;
    this.password=null;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(this.USER_SESSION_ATTR);
    if (user === null)
      return false
      return true;
  }

  getLoggedInUserName(){
    let user = sessionStorage.getItem(this.USER_SESSION_ATTR);
    if(user === null)
    return '';
    return user;
  }

}
