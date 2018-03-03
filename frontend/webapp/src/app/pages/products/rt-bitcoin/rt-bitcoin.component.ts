import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-rt-bitcoin',
  templateUrl: './rt-bitcoin.component.html',
  styleUrls: ['./rt-bitcoin.component.scss']
})
export class RtBitcoinComponent implements OnInit {

  public value: number = 12345.67;
  public observable: Observable<boolean>;
  private observer: Observer<boolean>;

  constructor() {
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer).share();
    setTimeout(() => this.observer.next(true), 2000);
  }

  public changeTo(newValue: number) {
    this.value = newValue;
    setTimeout(() => this.observer.next(true), 2000);
  }

  ngOnInit() {
  }

}
