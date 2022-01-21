import { IProvince } from './../../interfaces/province/iprovince';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  getAllProvince(){
    return this.http.get<IProvince[]>(environment.apiURL+'api/province')
  } 

  getPagedProvince(page: number){
    return this.http.get<IProvince[]>(environment.apiURL+`api/province?page=${page}&size=20&sort=id,ASC`)
  }

  getProvince(id:number) {
    return this.http.get<IProvince>(environment.apiURL + 'api/province/' + id)
  }

  deleteProvince(province: IProvince){
    return this.http.delete(environment.apiURL+'api/province/'+province.id)
  }

  createProvince(province:IProvince){
    return this.http.post(environment.apiURL+'api/province',province)
  }

  editProvince(province:IProvince){
    return this.http.put<IProvince>(environment.apiURL+'api/province/'+province.id, province)
  }
}
