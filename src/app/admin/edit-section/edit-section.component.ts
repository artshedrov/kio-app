import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SectionsService} from '../shared/sections.service';
import {switchMap} from 'rxjs/operators';
import {Section} from '../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {
  form: FormGroup;

  constructor(
    private currentRoute: ActivatedRoute,
    private sectionsService: SectionsService
  ) {}

  ngOnInit() {
    this.currentRoute.params
      .pipe(switchMap((params: Params) => {
         return this.sectionsService.getSectionById(params['id']);
      })).subscribe((section: Section) => {
        this.form = new FormGroup({
          title: new FormControl(section.title, Validators.required),
          text: new FormControl(section.text, Validators.required)
        });
    });
  }
  submitEditedSection() {}

}
