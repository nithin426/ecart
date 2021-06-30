import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public ecartForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    check: new FormControl(false, [Validators.required]),
  });

  public IsSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.ecartForm.valid) {
      console.log(this.ecartForm.value);
      console.log("Entire Form Value" + this.ecartForm.value);
      console.log("Email Address" + this.ecartForm.controls.email.value);
      this.IsSubmitted = true;
    } else {
      this.ecartForm.markAllAsTouched();
    }

  }

  public get f() {
    return this.ecartForm.controls;
  }



}
