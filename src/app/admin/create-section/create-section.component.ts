import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {Section} from '../shared/interfaces';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    });
  }
  submitCreatedSection() {
    if (this.form.invalid) {
      return;
    }
    const section: Section = {
      title: this.form.value.title,
      text: this.form.value.text
    };
    console.log(section);
  }

}
