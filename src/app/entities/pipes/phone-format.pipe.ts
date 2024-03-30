import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  name: 'phoneTransform',
  standalone: true,
  pure: true
})

export class PhoneFormatPipe implements PipeTransform {
    /**
     * Из полученных данных мы строим новую строчку
     * @param phoneNumber - исходная строка
     */
    transform(phoneNumber: string): string {
      return "+7(" + phoneNumber.slice(0, 3) + ")" + phoneNumber.slice(3, 6) + "-" + phoneNumber.slice(6, 8) + "-" + phoneNumber.slice(8);
    }
}
