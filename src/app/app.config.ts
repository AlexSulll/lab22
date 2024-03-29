import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from "@angular/material/datepicker";

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), MatDatepickerModule, provideAnimations()]
};
