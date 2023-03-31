import { Component, OnInit } from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  canvas: any;
  sw = 2;
  c = [];
  strokeColor = 0;
  bg: any;

  constructor() {}

  ngOnInit() {
    let lat = 31.2304;
    let lon = 121.4737;
    const sketch = s => {
      s.setup = () => {
        this.bg = s.loadImage('assets/img/vector-world-map-v2.2-blank.png');
        let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);
        canvas2.parent('sketch-holder');
      };

      s.draw = () => {
        s.background(this.bg);
      };

      s.mouseReleased = () => {
      };

      s.keyPressed = () => {
      };
    };

    this.canvas = new p5(sketch);
  }

  mercX(lat){
    let a = (128/Math.PI)*Math.pow(2, 1);
  }
}
