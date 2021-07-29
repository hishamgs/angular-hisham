import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';

@Component({
    selector: 'app-layout-filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
    private message: string;
    @Input() photo: string;
    @Input() photoTitle: string;

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.orderService.currentMessage.subscribe(message => this.message = message);
    }

    sendMessage(value: string) {
        this.message = value;
        this.orderService.sendMessage(this.message);
    }
}
