import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos:any;
  constructor(private http: HttpClient) { }

  getAllPhotos(): Observable< any [] >{
      return this.http.get< any [] >('https://localhost:7161'+'/api/UploadFile/ListBlobs');
  }
  // UploadPhoto(){
  //   return this.http.post('https://localhost:7113/api/UploadFile/savefile');
  // }
}
