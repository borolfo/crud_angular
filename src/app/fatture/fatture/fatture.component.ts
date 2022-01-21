import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from './../../services/fatture/fatture.service';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

 
  fatture: Fatture[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  
  constructor(private fattureService: FattureService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fattureService.getPagedFatture(params["page"]).subscribe((fatture:any) => {
        this.fatture = fatture.content
        
        /**inizio paginazione */
        this.totalElements = fatture.totalElements
        this.size = fatture.size
        this.numberOfPages = (fatture.totalElements / fatture.size)
  
        for(let i = 0; i <= this.numberOfPages && i <= 10; i++){
          this.pageNumbers.push(i);
        }
        /**fine paginazione */
      });
    })
  }

  removeFatture(fatture:Fatture){
    this.fattureService.deleteFatture(fatture).subscribe(res => {
      let index = this.fatture.indexOf(fatture);
      this.fatture.splice(index, 1);
    })
  }

  showDetailsFatture(item: IFatture){
    this.router.navigate(['detailFatture/', item.id])
  }
}
  