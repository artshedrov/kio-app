import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SectionsService} from '../shared/sections.service';
import {switchMap} from 'rxjs/operators';
import {Section} from '../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AlertSevice} from '../shared/service/alert.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit, OnDestroy {
  form: FormGroup;
  section: Section;
  submittedFlag: boolean;
  unSubscription: Subscription;

  constructor(
    private currentRoute: ActivatedRoute,
    private sectionsService: SectionsService,
    private alert: AlertSevice
  ) {}

  ngOnInit() {
    this.currentRoute.params
      .pipe(switchMap((params: Params) => {
         return this.sectionsService.getSectionById(params['id']);
      })).subscribe((section: Section) => {
        this.section = section;
        this.form = new FormGroup({
          title: new FormControl(section.title, Validators.required),
          text: new FormControl(section.text, Validators.required)
        });
    });
  }
  ngOnDestroy() {
    if (this.unSubscription) {
      this.unSubscription.unsubscribe();
    }
  }

  submitEditedSection() {
    if (this.form.invalid) {
      return;
    }
    this.submittedFlag = true;
    this.unSubscription = this.sectionsService.updateSection({
      ...this.section,
      title: this.form.value.title,
      text: this.form.value.text
    }).subscribe(() => {
      this.submittedFlag = false;
    });
    this.alert.saySuccess('Секция была обновлена');
  }
}
