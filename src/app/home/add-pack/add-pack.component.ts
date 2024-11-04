import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pack } from 'src/app/models/pack.model';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.css']
})
export class AddPackComponent implements OnInit{

  addform!: FormGroup

  addPackRequest: Pack ={
    packId: '',
    packName: '',
    duration: 0,
    price: 0
  }
  constructor(private packsservice: PacksService,private router: Router,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.addform = this.formBuilder.group({
      packName: [null , Validators.required],
      duration: [null , Validators.required],
      price: [null , Validators.required],
  })
  }

  addpack(){
    this.packsservice.addPack(this.addPackRequest)
    .subscribe({
      next: (pack) =>{
        alert('Successfully pack Details are added...')
        this.router.navigate([''])
      }

    })
  }
}
