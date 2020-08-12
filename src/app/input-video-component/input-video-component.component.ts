import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-video-component',
  templateUrl: './input-video-component.component.html',
  styleUrls: ['./input-video-component.component.css']
})


export class InputVideoComponentComponent implements OnInit {
  selectedFile = null;
  public fileURL = 'null';
  public id = 'inputVideo';
  public thisData = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    // How to play local video w/ angular: https://stackoverflow.com/questions/50822572/how-to-play-a-local-video-file-using-videogular2

    this.selectedFile = event.target.files[0];
    console.log('selectedFile: ', this.selectedFile);


    this.fileURL = URL.createObjectURL(this.selectedFile);
    console.log('fileURL: ', this.fileURL);

    var inputVideoElement = document.getElementById(this.id);
    inputVideoElement.setAttribute('src', this.fileURL);
  }

  async onClick(event){

    // 'http://echo.jsontest.com/key/value'

    // this.thisData = this.http.get('http://127.0.0.1:8000');
    // console.log(this.thisData.toPromise().then(data => {
    //   console.log(data);
    // }));

    // create blob from video
    let blob = await fetch(this.fileURL).then(r => r.blob());

    // upload video to starlette server
    const formData: FormData = new FormData();
    formData.append('upload_file', blob, 'thismyvid');
    this.http.post('http://127.0.0.1:8000/postTest', formData).toPromise().then(data => {
      console.log(data);
    });

    // formData.append('Image', image, image.name);
    // formData.append('ComponentId', componentId);
    // return this.http.post('/api/dashboard/UploadImage', formData);

  }
}
