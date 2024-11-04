
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/models/enquiry.model';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-pack-details',
  templateUrl: './pack-details.component.html',
  styleUrls: ['./pack-details.component.css']
})
export class PackDetailsComponent {

  enquirybody: Enquiry = {
    name: '',
    mobileNumber: 0,
    email: '',
    travelDate: new Date,
    duration: 0,
    noOfAdults: 0,
    specialNote: '',
  }

  enquiryform!: FormGroup;

  itShowme: boolean = true;
  inShowme: boolean = false;
  exShowme: boolean = false;
  conShowme: boolean = false;

  constructor(private formbuilder: FormBuilder, private router: Router, private http: HttpClient, private enquiryservice: EnquiryService) { }

  ngOnInit(): void {

    this.enquiryform = this.formbuilder.group({
      name: [null, Validators.required],
      mobileNumber: [null, Validators.required],
      email: [null, Validators.required],
      travelDate: [null, Validators.required],
      duration: [null, Validators.required],
      noOfAdults: [null, Validators.required],
      specialNote: [null, Validators.required]
    })


  }

  addEnquiryMethod() {
    this.enquiryservice.addEnquiry(this.enquirybody)
      .subscribe(enquiry => {
        alert('ThankYou for your Interest... We will Connect with you.')
        this.router.navigate(['travelpacks'])
      },
        err => {
          alert(err.error);

        }
      )

  }

  // addEnquiryMethod(){
  //   this.enquiryservice.addEnquiry(this.enquirybody)
  //   .subscribe({
  //     next: (enquiry) => {
  //       alert('ThankYou for your Interest... We will Connect with you.')
  //       this.router.navigate(['travelpacks'])
  //     }
  //   })
  // }


  iternity() {
    this.itShowme = true;
    this.exShowme = false;
    this.inShowme = false;
    this.conShowme = false;
  }
  packageincludes() {
    this.itShowme = false;
    this.exShowme = false;
    this.inShowme = true;
    this.conShowme = false;
  }
  packageexcludes() {
    this.itShowme = false;
    this.exShowme = true;
    this.inShowme = false;
    this.conShowme = false;
  }
  contact() {
    this.itShowme = false;
    this.exShowme = false;
    this.inShowme = false;
    this.conShowme = true;
  }
}
