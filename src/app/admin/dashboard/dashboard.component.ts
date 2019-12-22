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
  addSectionSubscription: Subscription;
  deleteSectionSubcription: Subscription;
  constructor(private sectionsService: SectionsService) { }

  ngOnInit() {
    this.addSectionSubscription = this.sectionsService.getAllSections().subscribe(sections => {
      this.sections = sections;
    });
  }
  removeSection(id: string) {
    this.deleteSectionSubcription = this.sectionsService.removeSectionFromFireBase(id).subscribe(() => {
      this.sections = this.sections.filter(section => section.id !== id);
    })
  }

  ngOnDestroy() {
    if (this.addSectionSubscription) {
      this.addSectionSubscription.unsubscribe();
    }
    if (this.deleteSectionSubcription) {
      this.deleteSectionSubcription.unsubscribe();
    }
  }
}
