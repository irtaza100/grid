import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  startTime;
  timeInterval;
  seconds =0;
  minutes = 0;
  hours = 0;

  ngOnInit() {
  }

  stopTimer() {
      clearInterval(this.timeInterval);
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
  }

  startTimer() {
    this.startTime = new Date().getTime();
    this.timeInterval = setInterval(() => {
      let intervalRequired =  new Date().getTime() - this.startTime;
      this.seconds = Math.floor((intervalRequired % (1000 * 60)) / 1000);
      console.log(this.seconds);
      this.minutes = Math.floor((intervalRequired % (1000 * 60 * 60)) / (1000 * 60));
       this.hours = Math.floor((intervalRequired % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    }, 910);
  }

}
