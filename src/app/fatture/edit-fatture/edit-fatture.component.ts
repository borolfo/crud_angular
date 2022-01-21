import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-fatture',
  templateUrl: './edit-fatture.component.html',
  styleUrls: ['./edit-fatture.component.css']
})
export class EditFattureComponent implements OnInit {

  editFatture!: Fatture;
  stato=[{id:1, nome: "PAGATA"}, {id:"2", nome:"NON PAGATA"}]

  constructor(
    private fattureService: FattureService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.fattureService.getFattureById(params['id']).subscribe(res =>{
        this.editFatture = res
      })
    })
  }

  saveEditFattura(editFatture:Fatture){
    this.fattureService.editFatture(editFatture).subscribe(data => {
      Swal.fire(
        'OK!',
        'Modifica salvata con successo.',
        'success'
      )
      this.router.navigate(['detailFatture/', this.editFatture.id])
    })
  }

  backToDetailFattura(){
    this.router.navigate(['detailFatture/', this.editFatture.id])
  }

}
