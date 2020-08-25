import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProcessVideoService {
  ogFileURL;
  ogSelectedFile;
  ogVideoBlob;

  constructor(private http: HttpClient) { }

  ngOninit() {
  }

  async addVideo(selectedFile, fileURL){
    this.ogSelectedFile = selectedFile;
    this.ogFileURL = fileURL;
    this.ogVideoBlob = await fetch(this.ogFileURL).then(r => r.blob());

    console.log('Video added')
  }

  async sendVideoToProcess(){

    // upload video to starlette server
    const formData: FormData = new FormData();
    formData.append('upload_file', this.ogVideoBlob, 'thismyvid');
    this.http.post('http://127.0.0.1:8000/postTest', formData).toPromise().then(data => {
      console.log(data);
    });

    console.log('Video sent')
  }

}
