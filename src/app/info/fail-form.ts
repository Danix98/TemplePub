
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl:'./alert.component.html',
    styleUrls: ['./alert.component.css']
})



export class failForm {
    @Input() message: string;
    @Output() exit = new EventEmitter<void>();

    onClose() {
        this.exit.emit();
    }
}