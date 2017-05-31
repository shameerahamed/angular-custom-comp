import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterInputComponent } from './counter-input.component';
import { CustomInputComponent } from "./custom-input.component";
import { JsonInputComponent } from "./custom-textarea.component";
import { CustomSelectComponent } from "./custom-select.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CounterInputComponent, CustomInputComponent, JsonInputComponent, CustomSelectComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}