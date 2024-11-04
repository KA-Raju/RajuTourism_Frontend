import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry } from '../models/enquiry.model';
import { RegisterData } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http : HttpClient) { }

  addEnquiry(enquiryrequest: Enquiry):Observable<Enquiry>{
    return this.http.post<Enquiry>('https://localhost:7161'+'/api/Enquiry',enquiryrequest)
  }

  sendEmail(enquiryrequest: Enquiry):Observable<Enquiry>{
    return this.http.post<Enquiry>('https://localhost:7161'+'/api/SendEmail',enquiryrequest)
  }

  // sendEmailForRegister(registerrequest: RegisterData):Observable<RegisterData>{
  //   return this.http.post<RegisterData>('https://localhost:7161'+'/api/SendEmail/forRegistration',registerrequest)
  // }
}
