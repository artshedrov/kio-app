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
}


