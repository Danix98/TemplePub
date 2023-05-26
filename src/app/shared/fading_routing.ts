
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  state('in', style({ opacity: 1 })),
  state('out', style({ opacity: 0 })),
  transition('in => out', animate('500ms')),
  transition('out => in', animate('500ms'))
]);
