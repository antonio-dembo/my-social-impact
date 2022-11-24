import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msi-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle : string = "My Social Impact";

  constructor() { }

  ngOnInit(): void {
  }

}
