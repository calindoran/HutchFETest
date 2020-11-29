import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  type = "hutchId";
  query: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchType(type: string){
    this.type = type;
  }

  searchDb(){
    this.router.navigate(['/user']);
  }

}
