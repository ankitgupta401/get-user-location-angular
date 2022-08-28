import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'user-location-angular';
  location:any;
  locationJs: any;
  constructor(private commonService:CommonService){

  }

  ngOnInit(){
    this.commonService.getLocation().subscribe((response)=>{
      console.log(response);
      this.location = response;
    })

    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position);
      this.locationJs = position.coords;
    })
  }
}
