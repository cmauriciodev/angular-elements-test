import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit { 
  hits: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getHits().subscribe((data)=>{
      this.hits = data;
      console.log(data)
    });
    
  }

}
