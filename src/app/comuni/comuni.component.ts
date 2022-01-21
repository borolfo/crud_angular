import { Component, OnInit } from '@angular/core';
import { Comuni } from '../classes/comuni/comuni';
import { ComuniService } from '../services/comuni/comuni.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IComuni } from '../interfaces/comuni/icomuni';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

 
comuni: Comuni[] = [];
totalElements!: number;
size!: number;
numberOfPages!: number;
pageNumbers: number[] = [];

constructor(private comuniService: ComuniService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.comuniService.getPagedComuni(params["page"]).subscribe((comuni:any) => {
       this.comuni = comuni.content
      
        /**inizio paginazione */
        this.totalElements = comuni.totalElements
        this.size = comuni.size
        this.numberOfPages = (comuni.totalElements / comuni.size)

        for(let i = 0; i <= this.numberOfPages; i++){
          this.pageNumbers.push(i);
        }
        /**fine paginazione */
      });
    })
  }

  openEditComuni(editComuni: Comuni){
    this.router.navigate(['editComuni/page/', editComuni.id])
  }
 
  removeComuni(comuni:IComuni){
    this.comuniService.deleteComuni(comuni).subscribe(res => {
    let index = this.comuni.indexOf(comuni);
    this.comuni.splice(index, 1);
  }) 
  }
}
