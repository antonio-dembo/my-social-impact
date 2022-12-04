import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'msi-project-list',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  active = 1;
  pageTitle = 'Project List';
  listFilter = 'name';
  enableParticipateBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  participateToProject(){
    window.alert("Add logic to participate to this project.");
    
  }

  selectMyTab(){
    const triggerTabList: NodeListOf<Element> = document.querySelectorAll("#myTab button");

  }

}
