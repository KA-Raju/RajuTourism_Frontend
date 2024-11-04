
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  valid = true;
  visible:boolean=true;
  changetype:boolean=true;
  title: string='Login'
  loginForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,private http:HttpClient ){
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null , Validators.required],
      password: [null , Validators.required]
  })

  }
  onSubmit(){
    this.http.get<any>("https://localhost:7161/api/Register/GetUserDetails")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        localStorage.setItem('token1',user.name);
        //localStorage.setItem('token2',user.image);
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['travelpacks']);
      }else{
        alert("user no found")
      }
    },err=>{
      alert("something went wrong")
    })
  }
  navRegs(){
    this.router.navigate(['register'])
  }
  viewpassword(){
    this.visible= !this.visible;
    this.changetype= !this.changetype;
  }
  l(){return this.loginForm.controls};
}
