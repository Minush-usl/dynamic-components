import { Component, OnInit } from '@angular/core';
import { DialogRef } from '../dialog/dialog-ref';
import { DialogConfig } from '../dialog/dialog.config';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef
  ) { }

  onClose() {
    this.dialog.close('some value');    
  }
}
