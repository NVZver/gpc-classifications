import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalisedContent } from '..//types/chunk';
import { copyObject } from '../../helpers/common';

@Component({
  selector: 'app-classification-localised-content',
  templateUrl: './classification-localised-content.component.html',
  styleUrls: ['./classification-localised-content.component.scss']
})
export class ClassificationLocalisedContentComponent {

  editMode = false;

  @Input()
  set localisedContent(value: LocalisedContent[]) {
    this._localisedContent = value;
    this._localisedContentCopy = copyObject(value);
  }

  get localisedContent(): LocalisedContent[] {
    return this._localisedContent;
  }

  @Input() canEdit = false;

  @Output() updated = new EventEmitter<LocalisedContent[]>();

  private _localisedContent: LocalisedContent[];
  private _localisedContentCopy: LocalisedContent[];


  onEdit(): void {
    this.toggleEditMode();
  }

  onSave(): void {
    this.updated.emit(this._localisedContent);
    this.toggleEditMode();
  }

  onCancel(): void {
    this._localisedContent = copyObject<LocalisedContent[]>(this._localisedContentCopy);
    this.toggleEditMode();
  }

  private toggleEditMode(): void {
    this.editMode = !this.editMode;
  }
}
