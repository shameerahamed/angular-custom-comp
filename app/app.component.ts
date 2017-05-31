import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createCounterRangeValidator } from './counter-input.component';

@Component({
  selector: 'my-app',  
  templateUrl: './oneForm.component.html'
  //templateUrl: './app.component.html'
})
export class AppComponent {

  form:FormGroup;
  textareaForm:FormGroup;
  inputForm:FormGroup;
  fname : string;

  selectForm:FormGroup;

  oneForm:FormGroup;
  selVal : number;

  counterValue = 3;
  minValue = 0;
  maxValue = 12;
  public result = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      counter: this.counterValue
    });

    this.result = {"hello":"world"};
    
    this.textareaForm = this.fb.group({
      result: [{"test123":"test456"}]
    });

    this.fname = "Mike";

    this.inputForm = this.fb.group({
     fname : this.fname
    });

    this.selVal = 0;
    this.selectForm = this.fb.group({
      selVal : this.selVal
    });

    this.oneForm = this.fb.group({
      fname : this.fname,
      result : this.result,
      selVal : this.selVal
    });
  }

  // Remove comments to apply validation imperatively
  // Also remove [counterRangeMax|Min] from <custom-counter> to see effect
  /*
  ngOnInit() {
    this.form = this.fb.group({
      counter: [this.counterValue, createCounterRangeValidator(this.maxValue, this.minValue)]
    });
  }
  */
}
