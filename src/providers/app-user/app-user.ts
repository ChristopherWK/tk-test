import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUserProvider {

  constructor(public http: Http) {
    console.log('Hello AppUserProvider Provider');
  }
  
baseUrl: string = "http://chrisssf-cloned-phortonssf.c9users.io:8080/api"
path: string = "/AppUsers"
register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }
login(storedUserData) {
    return this.http.post(
      this.baseUrl + this.path+"/login",
      storedUserData
    );
  }
  logout(token){
    return this.http.post(
      this.baseUrl + this.path + "/logout" +'?access_token=' + token,
      {}
      );
  }
}
