import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
    selector: 'custom-select',
    template:
        `<select
          [value]="selVal" 
          (change)="onChange($event)">
           <option value="1"> One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
           <option value="4">Four</option>
           <option value="5">Five</option>
        </select>
        `,
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    }]        
})
export class CustomSelectComponent implements ControlValueAccessor, Validator {
    private result: string;
    private parseError: boolean;
    private data: any;

    // this is the initial value set to the component
    public writeValue(obj: any) {
        if (obj) {
            this.data = obj;
            // this will format it with 4 character spacing
            this.result = this.data; 
        }
    }

    // registers 'fn' that will be fired wheb changes are made
    // this is how we emit the changes back to the form
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    // validates the form, returns null when valid else the validation object
    // in this case we're checking if the json parsing has passed or failed from the onChange method
    public validate(c: FormControl) {
        return (!this.parseError) ? null : {
            jsonParseError: {
                valid: false,
            },
        };
    }

    // not used, used for touch input
    public registerOnTouched() { }

    // change events from the textarea
    private onChange(event:any) {
      
        // get value from text area
        let newValue = event.target.value;

        try {
            // parse it to json
            this.data = (newValue);
            this.parseError = false;
        } catch (ex) {
            // set parse error if it fails
            this.parseError = true;
        }

        // update the form
        this.propagateChange(this.data);
    }

    // the method set in registerOnChange to emit changes back to the form
    private propagateChange = (_: any) => { };
}