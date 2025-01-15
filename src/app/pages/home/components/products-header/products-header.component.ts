import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OutgoingMessage } from 'http';


@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(newSort: string): void{
    this.sort = newSort;
  }
  onItemsUpdated(count: number): void{
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }
}
