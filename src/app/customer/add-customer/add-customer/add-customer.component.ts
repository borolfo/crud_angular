import { ActivatedRoute, Router } from '@angular/router';
import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/customer/customer';
import { ICustomer } from 'src/app/interfaces/customer/icustomer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ISede } from 'src/app/interfaces/sede/isede';
import { Sede } from 'src/app/classes/sede/sede';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { ComuniService } from 'src/app/services/comuni/comuni.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  newCustomer:ICustomer = new Customer();
  
  newSedeLeg: ISede = new Sede;
  newSedeOpe: ISede = new Sede;
  newComune: IComuni = new Comuni;
  comuni: IComuni[] = [];

  showLegale: boolean = false;
  showOperativa: boolean = false;

  constructor(
    private customerService:CustomerService,
    private comuniService: ComuniService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
    this.comuniService.getAllComuni().subscribe((com:any) => {
      this.comuni = com.content
    })
  })
  }

  addCustomer(newCustomer: ICustomer) {
    this.customerService.createCustomer(newCustomer).subscribe((response:any) => {
      Swal.fire(
        'Ben fatto!',
        'Cliente aggiunto con successo!',
        'success'
      );
      console.log(newCustomer)
      this.router.navigate(['/users'])
      // this.router.navigate(['detailCustomer/', response.id])
    });
  };

  showSedeLegale(){
    if(this.showLegale == false)
      this.showLegale = true
    else
      this.showLegale = false
  }

  showSedeOperativa(){
    if(this.showOperativa == false)
      this.showOperativa = true
    else
      this.showOperativa = false
  }
  
}
