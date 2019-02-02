import { Component, OnInit, Input } from '@angular/core';
import {data} from '../data';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productdetails = data;
  editted=false;
  titl;
  desc;
  quant;

  constructor() { }

  ngOnInit() {
  }
  edit() {
    this.editted=true;
  }
  submit(){
    
  }
  
}
