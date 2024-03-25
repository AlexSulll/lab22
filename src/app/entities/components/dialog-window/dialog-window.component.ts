import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroupDirective, NgForm, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { ErrorStateMatcher, MatNativeDateModule } from "@angular/material/core";
import { FormBuilderService } from "../../services/form-builder.service";
import { MatDialogModule } from "@angular/material/dialog";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dialog-window',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatNativeDateModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent {
  matcher = new MyErrorStateMatcher();
  public pcClubForm = this._formBuilderService.pcClubForm;
  constructor(
    private readonly _formBuilderService: FormBuilderService
  ) { }
  getDateFormatString(): string {
    return 'DD.MM.YYYY';
  }

  public add() {
    console.log(this.pcClubForm.getRawValue());
  }

  public get nameControl(): FormControl {
    return this.pcClubForm.get('name') as FormControl;
  }

  public get numberOfComputerControl(): FormControl {
    return this.pcClubForm.get('NumberOfComputer') as FormControl;
  }

  public get dateControl(): FormControl {
    return this.pcClubForm.get('date') as FormControl;
  }
  public get gameControl(): FormControl {
    return this.pcClubForm.get('game') as FormControl;
  }

  public get checkControl(): FormControl {
    return this.pcClubForm.get('check') as FormControl;
  }

  public get phoneControl(): FormControl {
    return this.pcClubForm.get('phone') as FormControl;
  }
}
