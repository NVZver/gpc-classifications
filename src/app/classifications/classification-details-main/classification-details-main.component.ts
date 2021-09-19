import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chunk } from '../types/chunk';

@Component({
  selector: 'app-classification-details-main',
  templateUrl: './classification-details-main.component.html',
  styleUrls: ['./classification-details-main.component.scss']
})
export class ClassificationDetailsMainComponent {

  @Input() id: string;
  @Input() level: string;


}
