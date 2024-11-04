import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pack } from '../models/pack.model';

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  constructor(private http: HttpClient) { }

  getAllPacks(): Observable<Pack[]> {
      return this.http.get<Pack[]>('https://localhost:7161'+'/api/Pack');
  }

  addPack(addPackRequest: Pack): Observable<Pack>{
    addPackRequest.packId = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Pack>('https://localhost:7161'+'/api/Pack', addPackRequest);
  }

  getPack(packId: string): Observable<Pack>{
      return this.http.get<Pack>('https://localhost:7161'+'/api/Pack/'+ packId);
  }

  updatePack(packId: string , updatePackRequest : Pack): Observable<Pack>{
    return this.http.put<Pack>('https://localhost:7161'+'/api/Pack/'+ packId, updatePackRequest );
  }

  deletePack(packId: string): Observable<Pack>{
    return this.http.delete<Pack>('https://localhost:7161'+'/api/Pack/'+ packId);
  }

}
