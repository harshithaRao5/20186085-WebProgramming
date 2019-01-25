import { Component, OnInit } from '@angular/core';
import {details} from './details';
import {Details} from './mock-details';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	detail=Details;
	temp:boolean;
  constructor() {

  }

  ngOnInit() {
  }
  check(p:string) {
  	this.temp=false;
  	if(p===this.detail[0].secretKey) {
  		this.temp=true;
  	}
  }
  clear():void {
  	window.location.reload();
  }
}
