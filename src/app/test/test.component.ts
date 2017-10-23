import { FilterPipe } from '../artistsearch/artistsearch.pipe';
import { Component, OnInit, Pipe } from '@angular/core';
import { ArtistService } from '../artistservice/artistservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data1;
  constructor(private artser:ArtistService) {
   }

  ngOnInit():void {
    this.artser.getNews().subscribe(
      data=>{
        this.data1 = data
      },
      err =>{
        console.error(err);
      },
      () =>{
        var a = document.getElementsByTagName('body')[0];
         a.classList.remove("loading");   
      } 
    );
  }
  isLoaded(event,i){
    event.target.parentElement.classList.add("loaded")
    event.target.parentElement.nextElementSibling.classList.add("removeLoaded");
  }

}
