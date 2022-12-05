import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
    selector: 'ngbd-collapse-navbar',
    standalone: true,
    imports: [ NgbCollapseModule, AppRoutingModule],
    templateUrl: './collapse-navbar.component.html'
})
export class NgbdCollapseNavbar {
    @Input() pageTitle = '';
    isMenuCollapsed = true;
}