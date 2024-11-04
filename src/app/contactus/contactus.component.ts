import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
contactForm!:FormGroup;
constructor(){

}
ngOnInit(): void {
  
}
onSubmit(){
  
}
}
