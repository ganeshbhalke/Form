import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IData } from './shared/modules/for';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formData!: IData;

  onSubmit(form: NgForm) {
    this.formData = form.value;

    console.log(this.formData);
  }
}