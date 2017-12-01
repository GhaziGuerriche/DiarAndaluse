import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 images: Image[] = [
	{ "description": "We are covered", "url": "assets/img/1.jpg" },
	{ "description": "Generation Gap", "url": "assets/img/2.jpg" },
	{ "description": "Potter Me", "url": "assets/img/3.jpg" }	
];
}

  //IMAGES array implementing Image interface
export interface Image{
  description:string;
  url:string;
}

