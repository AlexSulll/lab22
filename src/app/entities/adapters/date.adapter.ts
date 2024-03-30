import { Injectable } from "@angular/core";
import { NativeDateAdapter } from "@angular/material/core";

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
  override parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str: string[] = value.split('/');
      const date: number = Number(str[0]);
      const month: number = Number(str[1]) - 1;
      const year: number = Number(str[2]);
      return new Date(year, month, date);
    }
    const timestamp: number = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
  override format(date: Date, displayFormat: string): string {
    if (displayFormat === 'input') {
      const day: number = date.getDate();
      const month: number = date.getMonth() + 1;
      const year: number = date.getFullYear();
      return this._to2digit(day) + '.' + this._to2digit(month) + '.' + year;
    } else if (displayFormat === 'inputMonth'){
      const month: number = date.getMonth() + 1;
      const year: number = date.getFullYear();
      return this._to2digit(month) + '.' + year;
    } else {
      return date.toDateString();
    }
  }

  /**
   * Преобразование даты в двузначное число
   * @param {number} n - число из даты
   * @private
   */
  private _to2digit(n: number): string {
    return ('00' + n).slice(-2);
  }
}

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'inputMonth',
    dateAllyLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearAllyLabel: {year: 'numeric', month: 'long'}
  }
}
