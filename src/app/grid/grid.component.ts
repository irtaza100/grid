import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }
  items = [
    {id:1},{id:2},{id:3},{id:4},
    {id:5},{id:6},{id:7},{id:8},
    {id:9},{id:10},{id:11},{id:12},
    {id:13},{id:14},{id:15},{id:16},
    {id:17},{id:18},{id:19},{id:20}
  ];

  ngOnInit() {
  }
  selectedBox(item) {
    this.items.forEach((element:any) => {
      element.activeRed = false;
      element.activeGreen = false;
    });
    if(item.id == 2 || item.id == 3 || item.id == 6 || item.id == 7 || item.id == 10 || item.id == 11) {
      item.activeRed = true;
    } else {
      item.activeGreen = true;
    }
  }

}
