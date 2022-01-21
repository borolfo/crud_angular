import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getAllComuni(){
    return this.http.get<IComuni[]>(environment.apiURL+'api/comuni')
  } 

  getPagedComuni(page: number){
    return this.http.get<IComuni[]>(environment.apiURL+`api/comuni?page=${page}&size=20&sort=id,ASC`)
  }

  editComuni(comune:IComuni){
    return this.http.put(environment.apiURL+'api/comuni/'+comune.id, comune)
  }

  getComune(id:number){
  return this.http.get<IComuni>(environment.apiURL+'api/comuni/'+ id)
  }

  createComuni(comuni:IComuni){
    return this.http.post(environment.apiURL+'api/comuni',comuni)
  }

  deleteComuni(comuni:IComuni){
    return this.http.delete(environment.apiURL+'api/comuni/'+comuni.id)
  }

}
