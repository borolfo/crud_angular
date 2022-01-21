import { Comuni } from './../../classes/comuni/comuni';
import { Component, OnInit } from '@angular/core';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import Swal from 'sweetalert2';
import { ProvinceService } from 'src/app/services/province/province.service';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-comuni',
  templateUrl: './add-comuni.component.html',
  styleUrls: ['./add-comuni.component.css']
})
export class AddComuniComponent implements OnInit {

  newComune: IComuni = new Comuni()
  prov: IProvince[] = []

  constructor(private comuniService: ComuniService,
    private provinceService: ProvinceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
    this.provinceService.getAllProvince().subscribe((prov: any)=>{
      this.prov = prov.content
    })
  })
  }

  addComune(newComune: IComuni) {
    this.comuniService.createComuni(newComune).subscribe(res => {
      Swal.fire(
        'Ben fatto!',
        'Provincia aggiunta con successo!',
        'success'
      );
      this.router.navigate(['comuni'])
    });
  };

}
