import { Component, Inject } from '@angular/core';
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
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { NgxMaskDirective, provideNgxMask, NgxMaskPipe } from "ngx-mask";
import { DialogData } from "../../interfaces/dialog-data.interface";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dialog-window',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatNativeDateModule, ReactiveFormsModule, MatDialogModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent {
  matcher = new MyErrorStateMatcher();
  public pcClubForm = this._formBuilderService.pcClubForm;
    constructor(
    private readonly _formBuilderService: FormBuilderService,
    public dialogRef: MatDialogRef<DialogWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  public add() {
      //const string = this.pcClubForm.get('phone')?.value;
      // @ts-ignore
      //const phone = '+7(' + string.substring(0,3) + ')' + string.substring(3,6) + '-' + string.substring(6,8) + '-' + string.substring(8);
      const formValue = {name: this.pcClubForm.get('name')?.value, numberOfComputer: this.pcClubForm.get('numberOfComputer')?.value, date: this.pcClubForm.get('date')?.value, game: this.pcClubForm.get('game')?.value, phone: this.phoneControl};
      //const formValue = this.pcClubForm.getRawValue();
      //console.log(formValue);
      console.log(this.pcClubForm.getRawValue());
      this.dialogRef.close(formValue);
  }
  public get nameControl(): FormControl {
      return this.pcClubForm.get('name') as FormControl;
  }

  public get numberOfComputerControl(): FormControl {
      return this.pcClubForm.get('numberOfComputer') as FormControl;
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

  getToday() {
      return new Date().toISOString().split('T')[0];
  }
}
