import { Component, OnInit } from '@angular/core';
import { ProcessVideoService } from '../process-video.service';

@Component({
  selector: 'app-input-video-component',
  templateUrl: './input-video-component.component.html',
  styleUrls: ['./input-video-component.component.css']
})


export class InputVideoComponentComponent implements OnInit {
  
  selectedFile = null;
  public fileURL = 'null';
  public id = 'inputVideo'; // id of the video in HTML, @TODO: this is dumb fix it

  constructor(private processVideoService: ProcessVideoService) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    // How to play local video w/ angular: https://stackoverflow.com/questions/50822572/how-to-play-a-local-video-file-using-videogular2

    // get the file
    this.selectedFile = event.target.files[0];
    console.log('selectedFile: ', this.selectedFile);

    // Create URL
    this.fileURL = URL.createObjectURL(this.selectedFile);
    console.log('fileURL: ', this.fileURL);

    // Make it play the video in HTML
    var inputVideoElement = document.getElementById(this.id);
    inputVideoElement.setAttribute('src', this.fileURL);
  }

  async onClick(event){
    // use processVideoService to send the video to starlette server
    this.processVideoService.sendVideoToProcess();
  }

  async addVideo(event){
    // adds the video and its url (which needed to be made here to update HTML(@TODO: maybe do this differently in the future))
    // I think we can make the URL in processVideoService and return it after the video is added

    // @TODO: I can move this funciton into the onFileSelected method, no reason to have a separate button
    this.processVideoService.addVideo(this.selectedFile, this.fileURL);
  }
}