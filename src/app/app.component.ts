import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { APIService }  from './api.service'
import { ProjectDescriptionDTO } from './projectDescriptionDTO'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {  
  voices = ["Matthew", "Joanna", "Ivy", "Justin"];
  selectedVoice = "Matthew";
  public projectCode: string;
  public teamSize: number;
  public description: string = "fgfg";
   
  constructor(private api: APIService){
    this.projectCode = "asd"
  }


  public ngOnInit(): void {
    this.description = "Hello World"

  }

  playAudio(url){
    let audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }
  sendData(){

    console.log(this.teamSize)

    let sendthis :ProjectDescriptionDTO = {
      description: this.description,
      projectCode: this.projectCode,
      teamSize: this.teamSize
    }
    console.log(sendthis);
    // this.api.send(sendthis).subscribe((result:any) => {
    //   console.log(result)
      
    // });
  }
}
