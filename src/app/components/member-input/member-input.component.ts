import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-member-input',
  templateUrl: './member-input.component.html',
  styleUrls: ['./member-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MemberInputComponent),
      multi: true,
    },
  ],
})
export class MemberInputComponent implements OnInit, ControlValueAccessor {
  @Input() inputType: string;

  //*main variables for creating custom form control
  public value: any;
  public changed: (value: string) => void;
  public touched: () => void;
  public isDisabled: boolean;

  ngOnInit(): void {}

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange(event: Event): void {
    const value: any = (event.target as HTMLInputElement).value;

    this.changed(value);
  }
}
