import Swal from 'sweetalert2';
import { IProvince } from './../../interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/classes/province/province';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.css']
})
export class AddProvinceComponent implements OnInit {

  newProvince: IProvince = new Province();

  constructor(private provinceService: ProvinceService, private router: Router) { }

  ngOnInit(): void {
  }

  addProvincia(newProvince: IProvince) {
    this.provinceService.createProvince(newProvince).subscribe(res => {
      Swal.fire(
        'Ben fatto!',
        'Provincia aggiunta con successo!',
        'success'
      );
      this.router.navigate(['province'])
    });
  };


}
