import { Component, Input, OnInit } from '@angular/core';
import { Chunk } from '../types/chunk';

@Component({
  selector: 'app-classification-details-main',
  templateUrl: './classification-details-main.component.html',
  styleUrls: ['./classification-details-main.component.scss']
})
export class ClassificationDetailsMainComponent implements OnInit {

  @Input() chunk: Chunk | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
