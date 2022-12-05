import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { projects } from './data';
import { IProject } from './project';

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

  projetos: IProject[] = [{
    projectId: 1,
    projectName: "Leaf Lake",
    projectAttendee: 2,
    projectOwner: "1",
    releaseDate: "March 18, 2021",
    description: "Leaf rake with 48-inch wooden handle.",
    imageUrl: "assets/images/como-criar-ongs.png"
  }];

  desableParticipar = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  participateToProject() {
    window.alert("Usuario inscrito com sucesso.");
    if(!this.desableParticipar){
      this.desableParticipar = true;
    }
  }

  selectMyTab() {
    const triggerTabList: NodeListOf<Element> = document.querySelectorAll("#myTab button");

  }

  openProjectDetail(){
    this.router.navigate(['/project-detail']);
  }



}
