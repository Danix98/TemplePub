
import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

//effetto riutilizzato per ogni elemento in navbar
export const fadeAnimation =
  trigger('fadeAnimation',
  [
    //zero stadi: la transizione di 'fading' avviene in un unica sequenza di azioni
    transition('* => *',

      [query(':enter',
        [style({opacity: 0, position: 'relative'})],
        {optional: true}),
        
      query(':enter',
        [style({opacity: 0}), animate('0.6s', style({opacity: 1}))],
        {optional: true})]),
]);
