import { Component, OnInit } from '@angular/core';
import { Result } from '../../Models/Result';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: Result;
  constructor() { }

  ngOnInit() {
  }

}