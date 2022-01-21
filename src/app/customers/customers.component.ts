import { ICustomer } from 'src/app/interfaces/customer/icustomer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../classes/customer/customer';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
 

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

ngOnInit(): void {
    
  this.route.params.subscribe(params => {
      
    this.customerService.getPagedUsers(params["page"]).subscribe((customers:any) => {
       
      this.customers = customers.content
        
      /**inizio paginazione */
      this.totalElements = customers.totalElements
      this.size = customers.size
      this.numberOfPages = (customers.totalElements / customers.size)

      for(let i = 0; i <= this.numberOfPages; i++){
        this.pageNumbers.push(i);
      }

      /**fine paginazione */
    });
  })
}

  removeCustomer(customer:Customer){
    this.customerService.deleteCustomer(customer).subscribe(res => {
    let index = this.customers.indexOf(customer);
    this.customers.splice(index, 1);
    })
  }

  showDetails(item: ICustomer){
    this.router.navigate(['detailCustomer/', item.id])
  }

}
