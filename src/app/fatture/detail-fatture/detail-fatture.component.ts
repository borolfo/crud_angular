import { FattureService } from './../../services/fatture/fatture.service';
import { Component, OnInit } from '@angular/core';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { Router, ActivatedRoute } from '@angular/router';
import { Fatture } from 'src/app/classes/fatture/fatture';

@Component({
  selector: 'app-detail-fatture',
  templateUrl: './detail-fatture.component.html',
  styleUrls: ['./detail-fatture.component.css']
})
export class DetailFattureComponent implements OnInit {

  detailFatture: IFatture = new Fatture;

  constructor(
    private fattureService: FattureService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(response => {
      this.fattureService.getFattureById(response['id']).subscribe(response => {
        this.detailFatture = response;
    })
    })
  }

  openEditDetails(editDetails: IFatture){
    this.router.navigate(['editFatture/page/', editDetails.id])
  }

}
