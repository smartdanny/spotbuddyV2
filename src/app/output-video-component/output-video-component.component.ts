import { Component, OnInit } from '@angular/core';
import { ProcessVideoService } from '../process-video.service';

import * as p5 from 'p5';
import { InputVideoComponentComponent } from '../input-video-component/input-video-component.component';
// import "p5/lib/addons/p5.sound";
// import "p5/lib/addons/p5.dom";


@Component({
  selector: 'app-output-video-component',
  templateUrl: './output-video-component.component.html',
  styleUrls: ['./output-video-component.component.css']
})
export class OutputVideoComponentComponent implements OnInit {

  public canvas;

  public fps = 30;

  public ogFileURL;

  constructor(private processVideoService: ProcessVideoService) { }

  ngOnInit() {
    const sketch = (s) => {

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        // s = document.getElementById('outputCanvas');
        s.createCanvas(400, 400);

        s.vid;

        // s.vid.hide();
        s.frameRate(this.fps);
      }
      
      // This function is called when the video loads
      function vidLoad() {
        s.vid.hide();
        s.vid.loop();
        // s.vid.volume(0);
        console.log('vid can play');
      }

      s.draw = () => {
        // s.background(255, 204, 0);
        s.rect(100, 100, 100, 100);
        s.circle(50,50,50,50);
        // vidLoad();
        // 
        if (typeof s.vid !== 'undefined'){
          s.image(s.vid, 0, 0);
          console.log('tings defined!');
        }
        // console.log(s.vid.time());
        s.circle(s.mouseX, s.mouseY, 20, 20);
        // console.log('okay den');
      };

      s.updateVid = () => {


        // this.ogFileURL = this.processVideoService.ogFileURL;
        // console.log('video updated');

        this.canvas.vid = this.canvas.createVideo(
          [this.processVideoService.ogFileURL],
          vidLoad
        );




      }

      s.someting = () => {
        console.log('hay');
      }

      // s.video = () => {

      // }
    }

    this.canvas = new p5(sketch, document.getElementById('outputCanvas'));
  }
  
  onClick(event){
    console.log(this.canvas);

    // Make it play the video in HTML
    // var inputVideoElement = document.getElementById('outputVideo');
    // inputVideoElement.setAttribute('src', this.processVideoService.ogFileURL);

    // this.canvas.vid = this.canvas.createVideo(
    //   [this.processVideoService.ogFileURL],
    //   this.canvas.vidLoad
    // );

    // this.ogFileURL = this.processVideoService.ogFileURL;


    // this.canvas.someting();
    this.canvas.updateVid();
    



    // console.log('click')
    // this.canvas.draw(InputVideoComponentComponent.)
    // console.log(this.inputVideoComponent.fileURL);
  }

}
