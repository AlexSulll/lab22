import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroupDirective, NgForm, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MatNativeDateModule } from "@angular/material/core";
import { FormBuilderService } from "../../services/form-builder.service";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { NgxMaskDirective, provideNgxMask, NgxMaskPipe } from "ngx-mask";
import { IDialogData } from "../../interfaces/dialog-data.interface";
import { DatePipe } from "@angular/common";
import { DateFormatPipe } from "../../pipes/date-format.pipe";
import { APP_DATE_FORMATS, AppDateAdapter } from "../../adapters/date.adapter";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dialog-window',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatNativeDateModule, ReactiveFormsModule, MatDialogModule, NgxMaskDirective, NgxMaskPipe, DatePipe, DateFormatPipe],
  providers: [provideNgxMask(), {provide: DateAdapter, useClass: AppDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}],
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent {
  matcher = new MyErrorStateMatcher();
  public pcClubForm = this._formBuilderService.pcClubForm;
    constructor(
    private readonly _formBuilderService: FormBuilderService,
    public dialogRef: MatDialogRef<DialogWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
  ) { }

  public get nameControl(): FormControl {
      return this.pcClubForm.get('name') as FormControl<string | null>;
  }
  public get numberOfComputerControl(): FormControl {
      return this.pcClubForm.get('numberOfComputer') as FormControl<string | null>;
  }
  public get dateControl(): FormControl {
      return this.pcClubForm.get('date') as FormControl<string | null>;
  }
  public get gameControl(): FormControl {
      return this.pcClubForm.get('game') as FormControl<string | null>;
  }
  public get checkControl(): FormControl {
      return this.pcClubForm.get('check') as FormControl<string | null>;
  }
  public get phoneControl(): FormControl {
      return this.pcClubForm.get('phone') as FormControl<string | null>;
  }
  public add(): void {
    const formValue: IDialogData = this.pcClubForm.getRawValue();
    this.dialogRef.close(formValue);
  }
  public close(): void {
    this.dialogRef.close();
  }
  public getToday() {
      return new Date().toISOString().split('T')[0];
  }
}
