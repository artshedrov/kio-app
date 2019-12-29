import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FireBaseCreateResponse, Section} from './interfaces';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SectionsService {
  constructor(private http: HttpClient) {}

  createSection(section: Section): Observable<Section> {
    return this.http.post(`${environment.fireBaseUrl}/sections.json`, section)
      .pipe(map((response: FireBaseCreateResponse) => {
        return {
          ...section,
          id: response.name,
        };
      }));
  }
  getAllSections(): Observable<Section[]> {
    return this.http.get(`${environment.fireBaseUrl}/sections.json`)
      .pipe(
        map((response: {[key: string]: any}) => {
          return Object
            .keys(response)
            .map( key => ({
              ...response[key],
              id: key
          }));
    }));
  }
  getSectionById(id: string): Observable<Section> {
    return this.http.get<Section>(`${environment.fireBaseUrl}/sections/${id}.json`)
      .pipe(map((section: Section) => {
      return {
        ...section,
        id,
      };
    }));
  }
  removeSectionFromFireBase(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fireBaseUrl}/sections/${id}.json`);
  }
  updateSection(section: Section): Observable<Section> {
    return this.http.patch<Section>(`${environment.fireBaseUrl}/sections/${section.id}.json`, section);
  }
}


