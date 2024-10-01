import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { __values } from 'tslib';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent {
  skills: { value: number, name:string }[] = [
    { value: 90 , name:"html"},
    { value: 70 , name:"CSS"},
    { value: 56 , name:"JS"},
    { value: 60 , name:"php"},
    { value: 45 , name:"TS"}



    
    
  ];
  counter: number = 0;
  interval: any;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.zone.run(() => {
        this.skills.forEach(skill => {
          if (skill.value >= skill.value) {
            clearInterval(this.interval);
          } else {
            skill.value += 1;
          }
        });
      });
    }, 30);
  }
  getCircleStyle(skill: { value: number, name: string }) {
    // Define the total circumference of the circle
    const circumference = 2 * Math.PI * 70; // Assuming a radius of 70, adjust as needed
  
    // Calculate the stroke-dashoffset based on the skill's value
    const strokeDashoffset = (1 - skill.value / 100) * circumference;
  
    // Return the style as an object
    return {
      'stroke-dashoffset': strokeDashoffset,
      stroke: 'url(#GradientColor)', // Apply the linear gradient
      animation: `anim ${skill.value / 10}s linear forwards`, // Adjust animation duration
    };
  }
}
