import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  Showme:boolean=true;
  Showcom:boolean=false;
  aboutfounder(){
    this.Showme=true;
    this.Showcom=false;
  }
  aboutcompany(){
    this.Showme=false;
    this.Showcom=true;
  }
}
