import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SectionsService} from '../admin/shared/sections.service';
import {Observable} from 'rxjs';
import {Section} from '../admin/shared/interfaces';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss']
})
export class SectionPageComponent implements OnInit {

  section$: Observable<Section>;

  constructor(
    private route: ActivatedRoute,
    private sectionsService: SectionsService
  ) { }

  ngOnInit() {
    this.section$ = this.route.params.pipe(switchMap((params: Params) => {
      return this.sectionsService.getSectionById(params['id']);
    }));
  }

}
