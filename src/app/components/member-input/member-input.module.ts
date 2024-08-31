import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberInputComponent } from './member-input.component';
import { FormGroupDirective } from '@angular/forms';

@NgModule({
  declarations: [MemberInputComponent],
  imports: [CommonModule],
  exports: [MemberInputComponent],
  providers: [FormGroupDirective],
})
export class MemberInputModule {}
