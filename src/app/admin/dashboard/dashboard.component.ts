import {Component, OnDestroy, OnInit} from '@angular/core';
import {SectionsService} from '../shared/sections.service';
import {Section} from '../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  sections: Section[] = [];
  sectionSubscription: Subscription;
  constructor(private sectionsService: SectionsService) { }

  ngOnInit() {
    this.sectionSubscription = this.sectionsService.getAllSections().subscribe(sections => {
      this.sections = sections;
    });
  }
  removeSection(id: string) {}

  ngOnDestroy() {
    if (this.sectionSubscription) {
      this.sectionSubscription.unsubscribe();
    }
  }
}
