import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  constructor(
    private readonly _formBuilder: FormBuilder,
  ) { }

  public get pcClubForm () {
    return this._formBuilder.group({
      'name': ['',[Validators.pattern(/^[а-яА-ЯёЁa-zA-Z ]*$/), Validators.required]],
      'numberOfComputer': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'game': ['', [Validators.required]],
      'check': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
    });
  }
}
