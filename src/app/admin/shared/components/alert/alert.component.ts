import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertSevice} from '../../service/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;
  public text: string;
  public type = 'success';
  alertSubscription: Subscription;
  constructor(private alertService: AlertSevice) { }

  ngOnInit() {
    this.alertSubscription = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;

      const alertTimeOut = setTimeout(() => {
        clearTimeout(alertTimeOut);
        this.text = '';
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }

}
