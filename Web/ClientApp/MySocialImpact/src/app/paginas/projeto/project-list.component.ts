import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msi-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  pageTitle = 'Project List';
  listFilter = 'name';
  enableParticipateBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  participateToProject(){
    window.alert("Add logic to participate to this project.");
    
  }

}
