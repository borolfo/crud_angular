import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Province } from 'src/app/classes/province/province';
import { ProvinceService } from 'src/app/services/province/province.service';

@Component({
  selector: 'app-edit-province',
  templateUrl: './edit-province.component.html',
  styleUrls: ['./edit-province.component.css']
})
export class EditProvinceComponent implements OnInit {

  editProvince!: Province;

  constructor(private provinceService: ProvinceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.provinceService.getProvince(params['id']).subscribe(res =>{
        this.editProvince = res
      })
    })
  }

  saveEditProvince(editProvince: Province){
    this.provinceService.editProvince(editProvince).subscribe(data => {
      Swal.fire(
        'OK!',
        'Modifica salvata con successo.',
        'success'
      )
      this.router.navigate(['province/'])
    })
  }

}
