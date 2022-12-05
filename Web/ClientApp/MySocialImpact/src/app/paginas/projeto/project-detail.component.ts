import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from './project';

@Component({
  selector: 'msi-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  pageTitle = 'Project Detail';
  project: IProject | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  onBack(): void {
    this.router.navigate(['/projects']);
  }

}
