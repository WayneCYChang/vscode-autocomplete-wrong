import { Component, OnInit } from '@angular/core';
import { ParentAService } from '../parent-a.service';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.css']
})
export class ParentAComponent implements OnInit {

  a = this.parentAService

  constructor(private parentAService: ParentAService) { }

  ngOnInit(): void {
  }

}
