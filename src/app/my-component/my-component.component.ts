import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  selectedItem: any = null;

  data = [
    { id: 1, name: 'pooja'},
    { id: 2, name: 'aditya'},
    { id: 3, name: 'arti' },
    { id: 4, name: 'vrushali'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(item: any) {
    this.selectedItem = item;
  }
}


