import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ArtistService } from '../artistservice/artistservice.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'artistdetail',
  templateUrl: './artistdetail.component.html',
  styles: ['']
})

export class ArtistDetailComponent implements OnInit {
    data2;
    constructor(private route: ActivatedRoute,private router: Router,private artser:ArtistService) {
   }

  ngOnInit():void {
    
  }

}
