import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parse-tool',
  templateUrl: './parse-tool.component.html',
  styleUrls: ['./parse-tool.component.scss']
})
export class ParseToolComponent implements OnInit{

  constructor(public route: Router){
  }

  ngOnInit(): void{
  }

}
