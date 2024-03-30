import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe ({
  name: 'dateTransform',
  standalone: true,
  pure: true
})

export class DateFormatPipe implements PipeTransform {
    constructor(private dateTransform: DatePipe) {
    }
    transform(value: Date | string | number, format?: string, timezone?: string, locale?: string): string | null;
    transform(value: null | undefined, format?: string, timezone?: string, locale?: string): null;
    transform(value: Date | string | number | null | undefined, format?: string, timezone?: string, locale?: string): string | null {
        return this.dateTransform.transform(value, format || 'dd.MM.yyyy', timezone, locale);
    }
}
