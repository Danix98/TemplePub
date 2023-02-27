
import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
    animate,
    state,
    style,
    transition,
    trigger } from "@angular/animations";

@Component({
    selector: 'app-alert',
    templateUrl:'./alert.component.html',
    styleUrls: ['./alert.component.css'],
    animations: [
        trigger('alertState', [
            state('in', style({
                opacity: 1,
                transform: 'translateY(0)'
            })),    transition('void => *', [
                        style({
                            opacity: 0,
                            transform: 'translateY(75px)'
                        }), animate(300) ])
        ])
    ]
})



export class AlertComponent {

    @Input() message: string;
    @Output() exit = new EventEmitter<void>();

    onClose() {
        this.exit.emit();
    }
}