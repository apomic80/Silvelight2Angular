import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DetailsService]
})
export class DetailsComponent implements OnInit {

  public schema: any;
  public data: any;

  constructor(private service: DetailsService) { }

  ngOnInit() {
    this.loadPage(1);
    // this.loadData(1);
  }

  public loadPage(id: number) {
    this.service.getPage(id)
      .subscribe(page => this.schema = page);
  }

  public loadData(id: number) {
    this.service.getData(id)
      .subscribe(data => this.data = data);
  }

}
