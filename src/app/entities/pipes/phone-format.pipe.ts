import {Pipe, PipeTransform} from "@angular/core";

@Pipe ({
  name: 'phoneTransform',
  standalone: true,
  pure: true
})

export class PhoneFormatPipe implements PipeTransform {
  transform(number: string): string {
    return "+7(" + number.slice(0, 3) + ")" + number.slice(3, 6) + "-" + number.slice(6, 8) + "-" + number.slice(8);
  }
}
