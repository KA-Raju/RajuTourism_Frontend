import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Binary } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  uploadform!: FormGroup;
  url="./assets/upload image.png";
  // showall:boolean=true;
  // showaruku:boolean=false;
  // showlam:boolean=false;
  // showvizag:boolean=false;

  showphotos:boolean= true;
  showupload : boolean = false;

  photoslist: any[] = [];

  constructor(private photosservice : PhotosService,private router: Router, private formBuilder: FormBuilder, private http : HttpClient){}
  ngOnInit(): void {
    this.photosservice.getAllPhotos()
  .subscribe(photos => {
      console.log(photos)
      this.photoslist = photos
      console.log(this.photoslist)

    }
  )

  this.uploadform = this.formBuilder.group({
    FileName: [null , Validators.required],
    FilePath: [null , Validators.required]
})

}

photos(){
  this.showphotos=true;
  this.showupload=false;
}

uploads(){
  this.showphotos=false;
  this.showupload=true;
}

imageUpload(event : any ){
var file = event.target.files[0]
var reader = new FileReader();
reader.readAsDataURL(file);
reader.onload=(e:any)=>{
  this.url = e.target.result;
}
const formData: FormData = new FormData();
//this.formdata= formData;
formData.append('file',file,file.name);

this.http.post('https://localhost:7010/api/UploadFile/savefile', formData)
.subscribe((data: any)=>{
  //this.photoFileName = data.toString();
})
}

uploadimage(){

//   this.http.post('https://localhost:7113/api/UploadFile/savefile', this.formdata)
// .subscribe((data: any)=>{
//   this.photoFileName = data.toString();
  alert("Photo Updated Successfully")
  this.router.navigate([''])

}
}



  // all(){
  //   this.showall=true;
  //   this.showaruku=false;
  //   this.showlam=false;
  //   this.showvizag=false;
  // }
  // aruku(){
  //   this.showall=false;
  //   this.showaruku=true;
  //   this.showlam=false;
  //   this.showvizag=false;
  // }
  // lambasingi(){
  //   this.showall=false;
  //   this.showaruku=false;
  //   this.showlam=true;
  //   this.showvizag=false;
  // }
  // vizag(){
  //   this.showall=false;
  //   this.showaruku=false;
  //   this.showlam=false;
  //   this.showvizag=true;
  // }

