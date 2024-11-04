import { Component, OnInit } from '@angular/core';
import { PacksService } from '../services/packs.service';
import { Pack } from '../models/pack.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
validationerror:any ;
packslist :  Pack[] = [];
constructor(private packsservice: PacksService){}

ngOnInit(): void {
  this.packsservice.getAllPacks()
  .subscribe({
    next: (packs) => {
      this.packslist = packs
    },
    error: (response) =>{
      if(response.status === 400){
        const validationerror = response.error;
        this.validationerror = validationerror
        alert(this.validationerror)
        console.log(this.validationerror)
      }
    }
  })
}
}
