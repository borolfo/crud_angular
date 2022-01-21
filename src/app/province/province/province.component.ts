import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from 'src/app/classes/province/province';
import { ProvinceService } from 'src/app/services/province/province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  
  province: Province[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];

  constructor(private provinceService: ProvinceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.provinceService.getPagedProvince(params["page"]).subscribe((province:any) => {
       this.province = province.content
        
        /**inizio paginazione */
        this.totalElements = province.totalElements
        this.size = province.size
        this.numberOfPages = (province.totalElements / province.size)


        for(let i = 0; i <= this.numberOfPages; i++){
          this.pageNumbers.push(i);
        }

        /**fine paginazione */
      });
    })
  }
   
  removeProvince(province:Province){
    this.provinceService.deleteProvince(province).subscribe(res => {
    let index = this.province.indexOf(province);
    this.province.splice(index, 1);
  })
}

openEditProvince(editProvince: Province){
  this.router.navigate(['editProvince/page/', editProvince.id])
}

  

}
