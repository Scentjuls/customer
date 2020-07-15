import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanizePipe } from './pipes/humanize/humanize.pipe';
import { NumberFormatPipe } from './pipes/negativeNumber/negative-number.pipe';
import { AbbPipe } from './pipes/abbriviate/abb.pipe';
import { DragDropDirective } from './directives/dragdrop/dragdrop.directive';
import { TrustedURLPipe } from './pipes/trustedURL/trusted-urlpipe.pipe';


@NgModule({
  declarations: [ HumanizePipe, NumberFormatPipe, AbbPipe, DragDropDirective, TrustedURLPipe ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
