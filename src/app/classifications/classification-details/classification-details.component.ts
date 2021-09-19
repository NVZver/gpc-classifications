import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassificationsService } from '../classifications.service';
import { Chunk, LocalisedContent } from '../types/chunk';

@Component({
  selector: 'app-classification-details',
  templateUrl: './classification-details.component.html',
  styleUrls: ['./classification-details.component.scss']
})
export class ClassificationDetailsComponent {

  chunk$: Observable<Chunk> = this.classificationsService.getChunk();

  editMode = false;

  constructor(
    private classificationsService: ClassificationsService
  ) { }

  onChunkUpdated(localisedContent: LocalisedContent[], chunk: Chunk): void{
    chunk.localisedContent = localisedContent;
    this.classificationsService.updateChunk(chunk);
  }

}
