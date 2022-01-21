import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { ICustomer } from 'src/app/interfaces/customer/icustomer';
import Swal from 'sweetalert2';
import { Customer } from 'src/app/classes/customer/customer';

@Component({
  selector: 'app-add-fatture',
  templateUrl: './add-fatture.component.html',
  styleUrls: ['./add-fatture.component.css']
})
export class AddFattureComponent implements OnInit {

  stato=[{id:1, nome: "PAGATA"}, {id:2, nome: "NON PAGATA"}]
  newFattura: Fatture = new Fatture();
  newCustomer: Customer = new Customer();
  customer: ICustomer[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number []=[]; 

  constructor(
    private fattureService: FattureService,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerService.getAll().subscribe((customer:any) => {
        this.customer = customer.content
        this.totalElements = customer.totalElements
        this.size = customer.size
        this.numberOfPages = customer.totalElements / customer.size
      for(let i = 0; i <= this.numberOfPages  && i <= 10; i++){
          this.pageNumbers.push(i);
        }
      });

    })
  }

  addFattura(newFattura: IFatture) {

    this.newCustomer = this.newFattura.cliente
    newFattura.cliente = this.newFattura.cliente

    this.fattureService.createFatture(newFattura).subscribe((res:any) => {
      Swal.fire(
        'Ben fatto!',
        'Fattura aggiunta con successo!',
        'success'
      );
      this.router.navigate(['detailFatture/', res.id])
    });
  };

}
