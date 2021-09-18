import { Component, Input, OnInit } from '@angular/core';
import { ChunkAttribute } from '../types/chunk';

@Component({
  selector: 'app-classification-details-attributes',
  templateUrl: './classification-details-attributes.component.html',
  styleUrls: ['./classification-details-attributes.component.scss']
})
export class ClassificationDetailsAttributesComponent implements OnInit {

  @Input() attributes: ChunkAttribute[];

  constructor() { }

  ngOnInit(): void {
  }

}
