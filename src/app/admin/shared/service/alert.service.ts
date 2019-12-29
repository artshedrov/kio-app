import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'danger';

export  interface Alert {
  type: AlertType;
  text: string;
}

@Injectable()
export class AlertSevice {
  public alert$ = new Subject<Alert>();

  saySuccess(text: string) {
    this.alert$.next({type: 'success', text});
  }

  sayWarning(text: string) {
    this.alert$.next({type: 'warning', text});
  }

  sayDanger(text: string) {
    this.alert$.next({type: 'danger', text});
  }
}
