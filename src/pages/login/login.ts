import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUserProvider } from '../../providers/app-user/app-user';
import { LobbyPage } from '../../pages/lobby/lobby';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any ={}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser:AppUserProvider
    ) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
signupForm(form){
  console.log(form);
  if(form.invalid) {
      return alert("Please fill in all of the required fields.");
}

    this.appUser.login(this.user)
    .map(res=>res.json())
    .subscribe(res=>{
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(LobbyPage);
    }, error=>{
      return alert ("error")
    });
}
}
