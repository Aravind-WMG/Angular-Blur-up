
import { Component } from '@angular/core';
import { ArtistService } from './artistservice/artistservice.service';

@Component({
    selector:'artistname',
    template:`<h1>{{title}}</h1>
    <li *ngFor = "let a of artistDetailFromService">{{a}}</li>`,
    styles:[]
})

export class ArtistName{
    title:string="Quick Start Ready";
    artistDetailFromService;
    
    
}