import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './core/components/page/page.component';
import { StudentTableComponent } from './core/components/student-table/student-table.component';
import { HeaderComponent } from './shared/header/header.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsDialogComponent } from './shared/components/students-dialog/students-dialog.component';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StudentTableComponent,
    HeaderComponent,
    StudentsDialogComponent,
    SideNavbarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
