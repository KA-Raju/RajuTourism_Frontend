import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from '../models/register.model';
import { RegisterService } from '../services/register.service';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title: string = 'Register';
  registerForm!: FormGroup;
  visible: boolean = true;
  changetype: boolean = true;
  registerRequest: RegisterData = {
    name: '',
    mobileNo: 0,
    email: '',
    password: ''
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private registerservice: RegisterService, private registeremailservice: EnquiryService) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: new FormControl(null, Validators.required),
        mobileNo: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
      }
    )
  }

  formReset() {
    this.registerForm.reset();
  }
  viewpassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  onSubmit() {
    this.registerservice.Register(this.registerRequest)
      .subscribe(res => {
        alert('Successfully Registered'),
          this.registerForm.reset(),
          this.router.navigate(['login'])
      }, err => {
        alert("Email already exist... Please register with different Email Id or login with this email Id")
      })
    console.log(this.registerForm.value);
    console.log('Successfully Registered');
    // this.registeremailservice.sendEmailForRegister(this.registerRequest)
    //   .subscribe({
    //     next: (data) => {
    //     }
    //   })
  }
}
