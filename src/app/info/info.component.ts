
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['../shared/generics.css', '../shared/spinner.css', './info.component.css']
})


export class InfoComponent implements OnInit {

  sendMessage: FormGroup;
  isLoading = false; 
  loadTime: number;
  error: string = null;

  ngOnInit() {

    this.loadTime = Math.floor(Math.random() * 10) + 2;

    this.sendMessage = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'messaggio': new FormControl(null, Validators.required)
    });

    this.sendMessage.valueChanges.subscribe({
      next: (resData) => {
        resData = this.onInoltro;
      },
    });

  }

  onInoltro() {
    this.isLoading = true;
    console.log(this.loadTime);

    setTimeout(() => {

      if(this.sendMessage.controls['messaggio'].value.length < 10) {
        this.error = 'Richiesta non inviata. Il messaggio deve contenere almeno 10 caratteri.';
        console.log('Errore')
      };

      this.isLoading = false;
    
      console.log(this.sendMessage);
      // console.log(this.sendMessage.value);

    }, this.loadTime*1000)
  };

  onClose() {
    this.error = null;
  }
  
}
