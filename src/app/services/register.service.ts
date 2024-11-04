import { Injectable } from '@angular/core';
import { RegisterData } from '../models/register.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  Register(registerRequest: RegisterData): Observable<RegisterData>{

    return this.http.post<RegisterData>('https://localhost:7161'+'/api/Register', registerRequest);
  }
}
