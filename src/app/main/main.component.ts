
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MainService } from './main.service';
import { RequestTService } from '../material/info/table/table_ref/requestT.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../shared/generics.css', './main.component.css'],
  providers: [MainService]
})



export class MainComponent implements OnInit {

  postReq_load = this.RequestTService.postReq_load; //INFO->MAIN->INFO
      
  shorten: boolean = true;
    onShorten() {
      this.shorten = false;
    }
        
        
  constructor( private RequestTService: RequestTService, private MainService: MainService ) { }
    
    text_one = this.MainService.one;
    text_two = this.MainService.two;
    text_thr = this.MainService.thr;
    text_fou = this.MainService.fou;
    text_fiv = this.MainService.fiv;


    
  yPosition: number;
  isVisible: boolean = false;
    
  ngOnInit() {
    const scrollObservable = new Observable<Event>(observer => {
      window.addEventListener('scroll', () => {
        this.yPosition = window.pageYOffset;
        observer.next();
      });
    });
    scrollObservable.subscribe(() => {
      if (this.yPosition >= 600)
        this.isVisible = true;
      else
        this.isVisible = false;
    });
  }

  toTop() {
    const element = document.getElementById('target');
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
