import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='td-form';


  @ViewChild('signUp')signUp!:NgForm;

  mocArr=[
    {contactMode:"phone"},
    {contactMode:"email"},
    {contactMode:"fax"}
  ]

  userDetails = {
  UserName: 'ganesh Bhalke',
  email: 'ganesh@gmail.com',
  role : 'Angular',
  description: 'The Developer',
  isSubscribed: true,
  modeofcontect: 'phone'
}


  onSubmit(){
   if(this.signUp.invalid){
    this.signUp.form.markAllAsTouched()
    return
   }
    console.log(this.signUp);
    console.log(this.signUp.value);

    this.signUp.reset()
    
  }

  onEdit(){
    this.signUp.form.patchValue(this.userDetails)
  }
}