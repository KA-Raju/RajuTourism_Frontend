import { Component } from '@angular/core';
import { GuardingGuard } from './guarding.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private guard: GuardingGuard){}
  title = 'RajuTourism';
loggedin(){
  return localStorage.getItem('token1');

}
// fetchimage(){
//   return localStorage.getItem('token2')
// }
onLogout(){

  return localStorage.removeItem('token1')

}
}
