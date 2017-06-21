import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../../pages/question/question';
import { HistoryPage} from '../../pages/history/history';
import { LandingPage } from '../../pages/landing/landing';
import { AppUserProvider } from '../../providers/app-user/app-user';
/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public appUser:AppUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
  logout(){
    this.appUser.logout(window.localStorage.getItem('token'))
    .map(res=>res.json())
    .subscribe(res=>{
      this.navCtrl.setRoot(LandingPage)
    },error =>{
      return alert ("error")
    });
}
  takeTest(){
    this.navCtrl.push(QuestionPage);
  }
 myHistory(){
    this.navCtrl.push(HistoryPage);
}

}