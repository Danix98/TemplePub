
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['../shared/generics.css', './info.component.css']
})


export class InfoComponent implements OnInit {
  sendMessage: FormGroup;

  ngOnInit() {
    this.sendMessage = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'messaggio': new FormControl(null, Validators.required)
    })
  }

  onInoltro() {
    console.log('Form: Invio riuscito')
  }
}
