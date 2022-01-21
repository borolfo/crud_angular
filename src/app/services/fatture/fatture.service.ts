import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http: HttpClient) { }

  getAllFatture(){
    return this.http.get<IFatture[]>(environment.apiURL+'api/fatture')
  }

  getByIdCustomer(id:number){
    return this.http.get<IFatture>(environment.apiURL + `api/fatture/cliente/${id}?page=&size=20&sort=id,ASC` )
  }

  getPagedFatture(page: number){
    return this.http.get<IFatture[]>(environment.apiURL+`api/fatture?page=${page}&size=20&sort=id,ASC`)
  }

  getFattureById(id:number){
    return this.http.get<IFatture>(environment.apiURL+'api/fatture/'+ id)
  }

  createFatture(fatture:IFatture){
    return this.http.post(environment.apiURL+'api/fatture',fatture)
  }

  deleteFatture(fatture: IFatture){
  return this.http.delete(environment.apiURL+'api/fatture/'+fatture.id)
  }

  editFatture(fatture:IFatture){
    return this.http.put<IFatture>(environment.apiURL+'api/fatture/'+fatture.id,fatture)
  }
}
