import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ProcessVideoService } from '../process-video.service';

@Component({
  selector: 'app-input-video-component',
  templateUrl: './input-video-component.component.html',
  styleUrls: ['./input-video-component.component.css']
})


export class InputVideoComponentComponent implements OnInit {
  selectedFile = null;
  public fileURL = 'null';
  public id = 'inputVideo'

  constructor(private _processVideoService: ProcessVideoService) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    // How to play local video w/ angular: https://stackoverflow.com/questions/50822572/how-to-play-a-local-video-file-using-videogular2

    this.selectedFile = event.target.files[0];

    this.fileURL = URL.createObjectURL(this.selectedFile);

    var inputVideoElement = document.getElementById(this.id);
    inputVideoElement.setAttribute('src', this.fileURL);
  }

  onClick(event){
    console.log('hai');

    // I want to run the service I created
    console.log(this._processVideoService.doSomething());
  }
}
