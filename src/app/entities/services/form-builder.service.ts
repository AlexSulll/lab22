import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class FormBuilderService {
  constructor(
    private readonly _formBuilder: FormBuilder,
  ) { }
  /**
   * Создаем форму для данных из input, а также проверяем их на валидацию
   */
  public get pcClubForm () {
    return this._formBuilder.group({
      'name': [null, [Validators.pattern(/^[а-яА-ЯёЁa-zA-Z ]*$/), Validators.required]],
      'numberOfComputer': [null, [Validators.required]],
      'date': [null, [Validators.required]],
      'game': [null, [Validators.required]],
      'check': [null, [Validators.required]],
      'phone': [null, [Validators.required]],
    });
  }
}
