import { Component, OnInit } from '@angular/core';
import { ParentAService } from '../parent-a.service';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.css']
})
export class ParentAComponent implements OnInit {

  b = this.parentAService.

  a = this.parentAService // Type . here

  constructor(private parentAService: ParentAService) { }

  ngOnInit(): void {
  }

}
