import { Component, OnInit } from '@angular/core';
import {SectionsService} from '../admin/shared/sections.service';
import {Observable} from 'rxjs';
import {Section} from '../admin/shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  sections$: Observable<Section[]>;

  constructor(private sectionsService: SectionsService) {
  }

  ngOnInit() {
    this.sections$ = this.sectionsService.getAllSections();
  }
}
