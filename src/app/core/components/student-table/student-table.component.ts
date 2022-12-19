import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from 'src/app/shared/components/students-dialog/students-dialog.component';
import { Student } from '../../models/student.models';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})

export class StudentTableComponent {
  students: Student[] = [
    new Student(1, 'Juan', 'Pérez', true),
    new Student(2, 'Pablo', 'Franchescolli', true),
    new Student(3, 'Gonzalo', 'Modric', false),
    new Student(4, 'Alejandro', 'Román', false),
    new Student(5, 'María', 'Pérez', true),
  ]

  displayedColumns = ['id', 'name', 'surname', 'aproved', 'edit', 'remove']

  constructor(private readonly dialogService: MatDialog) {}
  
  addStudent() {
    const dialog = this.dialogService.open(StudentsDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        
        this.students = [...this.students, new Student(lastId + 1, value.name, value.surname, true)];
       }
    });
  };
}