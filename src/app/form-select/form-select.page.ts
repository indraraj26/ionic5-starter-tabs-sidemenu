import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.page.html',
  styleUrls: ['./form-select.page.scss'],
})
export class FormSelectPage implements OnInit {
  public submitted: boolean = false;
  public myForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    select_single_hobby: new FormControl(null, Validators.required),
    select_mul_hobby: new FormControl(null, Validators.required),
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      console.log(this.myForm);
    }
  }
}
