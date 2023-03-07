
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['../shared/generics.css', '../shared/spinner.css', './info.component.css']
})



export class InfoComponent implements OnInit {

  sendMessage: FormGroup;

  
  isLoading: boolean;
  loadTime: number = Math.floor(Math.random() * 8) + 2; //10s

  formChar: number = 5;
  mypost = null;

  errorFront: string = null;
  errorBack: string = null;

  constructor( private http: HttpClient ) { }



  ngOnInit() {
    this.sendMessage = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'messaggio': new FormControl(null, Validators.required)
    });

    this.isLoading = false;
  }

  onInoltro() {

    this.isLoading = true;
    console.log(this.loadTime);

    setTimeout(() => {

      //FRONTEND ERROR
      if(this.sendMessage.controls['messaggio'].value.length < this.formChar) {
        this.errorBack = null;

        this.sendMessage.controls['messaggio'].setErrors({'incorrect': true}); //form invalid
        this.errorFront =
        'Richiesta non inviata. Il messaggio deve contenere almeno ' + this.formChar + ' caratteri.';

      } else {

        //HTTP REQUEST
        this.http
        .post('https://templepub-eb4ae-default-rtdb.europe-west1.firebasedatabase.app/posts.json', this.sendMessage.value, { headers: new HttpHeaders({'Form-Header': 'Contributo Da Utente'}) })
        .subscribe({
          next: (post) => {
            this.mypost = post;
            // console.log(post);
            // console.log(this.sendMessage);
            return this.mypost;
          },
          error: (err) => {
            this.errorBack = err.status + ' ' + err.statusText;
          },
          complete: () => {
            this.errorBack = null;
            this.sendMessage.reset();
          }
        });

      }
      this.isLoading = false;

    }, this.loadTime*1000)
  };
  
  onClose() {
    this.errorFront = null;
  };

}
