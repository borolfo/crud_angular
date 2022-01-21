import  Swal  from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/customer/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editCustomer!: Customer;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.customerService.getCustomer(params['id']).subscribe(res =>{
        this.editCustomer = res
      })
    })
  }

  saveEditCustomer(editCustomer:Customer){
    this.customerService.editCustomer(editCustomer).subscribe(data => {
      Swal.fire(
        'OK!',
        'Modifica salvata con successo.',
        'success'
      )
      this.router.navigate(['detailCustomer/page/', this.editCustomer.id])
    })
  }

  backToCustomerDetail(){
    this.router.navigate(['detailCustomer/page/', this.editCustomer.id])
  }
}
