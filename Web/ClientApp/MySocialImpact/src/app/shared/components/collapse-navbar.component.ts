import { Component, Input } from "@angular/core";
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
    selector: 'ngbd-collapse-navbar',
    standalone: true,
    imports: [ NgbCollapseModule, AppRoutingModule, NgbDropdownModule],
    templateUrl: './collapse-navbar.component.html'
})
export class NgbdCollapseNavbar {
    @Input() pageTitle = '';
    isMenuCollapsed = true;
}