import { ComuniService } from './../../services/comuni/comuni.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Comuni } from 'src/app/classes/comuni/comuni';
import Swal from 'sweetalert2';
import { ProvinceService } from 'src/app/services/province/province.service';
import { IProvince } from 'src/app/interfaces/province/iprovince';

@Component({
  selector: 'app-edit-comuni',
  templateUrl: './edit-comuni.component.html',
  styleUrls: ['./edit-comuni.component.css']
})
export class EditComuniComponent implements OnInit {

  editComune!: Comuni;
  prov: IProvince[] = [];

  constructor(
    private comuniService: ComuniService,
    private router: Router,
    private route: ActivatedRoute,
    private provinceService: ProvinceService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.comuniService.getComune(params['id']).subscribe(res =>{
        this.editComune = res
      }),
      this.provinceService.getAllProvince().subscribe((prov: any)=>{
        this.prov = prov.content
      })
  })
}

  saveEditComune(editComune: Comuni){
    this.comuniService.editComuni(editComune).subscribe(data => {
      Swal.fire(
        'OK!',
        'Modifica salvata con successo.',
        'success'
      )
      this.router.navigate(['comuni/'])
    })
  }

}
