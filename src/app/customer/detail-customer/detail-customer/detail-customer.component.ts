import { CustomerService } from 'src/app/services/customer/customer.service';
import { ICustomer } from 'src/app/interfaces/customer/icustomer';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {

  details!: ICustomer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
    
  ngOnInit(): void {
    this.route.params.subscribe(response => {
      this.customerService.getCustomer(response['id']).subscribe(response => {
        this.details = response;
    })
  });
}

openEdit(editCustomer: ICustomer){
  this.router.navigate(['editCustomer/page/', editCustomer.id])
}
}
