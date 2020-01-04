import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Section} from '../shared/interfaces';
import {SectionsService} from '../shared/sections.service';
import {AlertSevice} from '../shared/service/alert.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {
  form: FormGroup;
  constructor(
    private sectionsService: SectionsService,
    private alert: AlertSevice
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      previewImg: new FormControl(null, Validators.required)
    });
  }
  submitCreatedSection() {
    if (this.form.invalid) {
      return;
    }
    const section: Section = {
      title: this.form.value.title,
      text: this.form.value.text,
      previewImg: this.form.value.previewImg
    };

    this.sectionsService.createSection(section).subscribe(() => {
      this.form.reset();
      this.alert.saySuccess('Секция была успешно создана');
    });
  }
}
