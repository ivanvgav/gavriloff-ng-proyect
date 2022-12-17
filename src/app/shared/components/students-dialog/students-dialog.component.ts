import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
})
export class StudentsDialogComponent {
  nameControl = new FormControl()
  surnameControl = new FormControl()

  studentForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
  })

  constructor(private readonly dialogRef: DialogRef) {}
  
}
