import { FilterPipe } from './artistsearch/artistsearch.pipe';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }         from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtistName } from './artist.component';
import { TestComponent } from './test/test.component';
import { ArtistService } from './artistservice/artistservice.service';

import { AppRoutingModule } from './routing/routing.module';
import { ArtistDetailComponent } from './artistdetail/artistdetail.component';

@NgModule({
  declarations: [
    AppComponent,ArtistName, TestComponent,FilterPipe,ArtistDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,AppRoutingModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }


