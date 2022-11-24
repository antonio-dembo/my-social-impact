import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msi-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  pageTitle = 'Project List';
  constructor() { }

  ngOnInit(): void {
  }

}
