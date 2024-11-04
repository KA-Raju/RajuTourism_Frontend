import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pack } from 'src/app/models/pack.model';
import { PacksService } from 'src/app/services/packs.service';

@Component({
  selector: 'app-edit-pack',
  templateUrl: './edit-pack.component.html',
  styleUrls: ['./edit-pack.component.css']
})
export class EditPackComponent implements OnInit {

  editform!: FormGroup

  packDetails: Pack = {
    packId:'',
    packName:'',
    duration:0,
    price:0
  }
  validationerror: any;

  constructor(private route : ActivatedRoute, private packsserive: PacksService, private router : Router,private formBuilder: FormBuilder){}

  ngOnInit(): void{
    this.editform = this.formBuilder.group({
      packName: [null , Validators.required,],
      duration: [null , Validators.required],
      price: [null , Validators.required],
  })


    this.route.paramMap.subscribe({
      next: (params) => {
        const packId = params.get('packId');

        if(packId){
          this.packsserive.getPack(packId)
          .subscribe({
            next: (response) => {
                this.packDetails = response;
            }
          })
        }
      }
    })
  }

  updatePack(){
    this.packsserive.updatePack(this.packDetails.packId, this.packDetails)
    .subscribe({
      next: (response) =>{
        alert('Updated Successfully')
        this.router.navigate([''])
      },
      error: (response) =>{
        const validationerror = response.error;
        this.validationerror = validationerror
        alert(this.validationerror)
        console.log(this.validationerror)
      }
    })
  }

  deletePack(packId: string){
    this.packsserive.deletePack(packId)
    .subscribe({
      next: (response) => {
        alert('Deleted Successfully')
        this.router.navigate([''])
      }
    })
  }
}
