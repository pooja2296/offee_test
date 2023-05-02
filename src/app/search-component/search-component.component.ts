import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {
  @Input() data!: any[];
  @Output() itemClick: EventEmitter<any> = new EventEmitter();
  results: any[] = [];
  query: any;

  
  onInputChange() {
    const filteredResults = this.data.filter((item) =>
      item.name.toLowerCase().includes(this.query.toLowerCase())
    );
    this.results = filteredResults;
  }

  onItemClick(item: any) {
    this.itemClick.emit(item);
    this.query = '';
    this.results = [];
  }
}


