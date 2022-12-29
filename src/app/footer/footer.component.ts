import { Component } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faTwitter = faTwitter;
  faFacebook = faFacebook;

  getVarInfo = true;
}
