import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chunk } from '../types/chunk';

@Component({
  selector: 'app-classification-details-main',
  templateUrl: './classification-details-main.component.html',
  styleUrls: ['./classification-details-main.component.scss']
})
export class ClassificationDetailsMainComponent {

  @Input()
  set chunk(value: Chunk | undefined) {
    this.chunkMain = value;
    if (value){
      this.chunkReserve = this.copyObject<Chunk>(value);
    }
  }

  get chunk(): Chunk | undefined {
    return this.chunkMain;
  }

  text = '';

  @Input() editMode = false;

  @Output() updated = new EventEmitter<Chunk>();

  private chunkMain: Chunk | undefined;
  private chunkReserve: Chunk;

  onEdit(): void {
    this.editMode = true;
  }

  onSave(): void {
    this.updated.emit(this.chunkMain);
    this.editMode = false;
  }

  onCancel(): void {
    this.chunkMain = this.copyObject<Chunk>(this.chunkReserve);
    this.editMode = false;
  }

  private copyObject<T>(obj: T): T{
    return JSON.parse(JSON.stringify(obj)) as T;
  }
}
