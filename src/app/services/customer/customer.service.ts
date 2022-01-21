import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/customer/icustomer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<ICustomer[]>(environment.apiURL+'api/clienti')
  }
  getPagedUsers(page: number){
    return this.http.get<ICustomer[]>(environment.apiURL+`api/clienti?page=${page}&size=20&sort=id,ASC`)
  }

  getCustomer(id:number) {
    return this.http.get<ICustomer>(environment.apiURL + 'api/clienti/' + id)
  }

  deleteCustomer(customer: ICustomer){
    return this.http.delete(environment.apiURL+'api/clienti/'+customer.id)
  }

  createCustomer(customer:ICustomer){
    return this.http.post(environment.apiURL+'api/clienti',customer)
  }

  editCustomer(customer:ICustomer){
    return this.http.put<ICustomer>(environment.apiURL+'api/clienti/'+customer.id,customer)
  }
}



