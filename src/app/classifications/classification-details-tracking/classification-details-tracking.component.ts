import { Component, Input, OnInit } from '@angular/core';
import { ChunkTracking } from '../types/chunk';

@Component({
  selector: 'app-classification-details-tracking',
  templateUrl: './classification-details-tracking.component.html',
  styleUrls: ['./classification-details-tracking.component.scss']
})
export class ClassificationDetailsTrackingComponent implements OnInit {

  @Input() tracking: ChunkTracking | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
