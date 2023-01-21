
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {
  faTwitter = faTwitter;
  faFacebook = faFacebook;

  constructor(public router: Router) {}
}
