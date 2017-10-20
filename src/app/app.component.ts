import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  artist = "Bruno gdfsgd";
  //console.log(artist)
  link = "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  clicked(){
    alert("clicked");
  }
}
