import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-tiles',
  templateUrl: './product-tiles.component.html',
  styleUrls: ['./product-tiles.component.scss']
})
export class ProductTilesComponent implements OnInit {

  @Input() data: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
