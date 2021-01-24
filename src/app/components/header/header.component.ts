import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @ViewChild('menuBtn') menuBtn;
  showMenu = false;
  navLink = {
    home: true, project: false, about: false, contact: false
  };

  constructor() { }

  ngOnInit(): void {

  }

  toggleMenu(){
    if(!this.showMenu){
      this.showMenu = true;
    }else {
      this.showMenu = false;
    }
  }

  navLinkClick(option){
    this.showMenu = false;
    switch(option){
      case 1: {
        this.navLink.home = true;
        this.navLink.project = false;
        this.navLink.about = false;
        this.navLink.contact = false;
      }
      break;
      case 2: {
        this.navLink.home = false;
        this.navLink.project = true;
        this.navLink.about = false;
        this.navLink.contact = false;
      }
      break;
      case 3: {
        this.navLink.home = false;
        this.navLink.project = false;
        this.navLink.about = true;
        this.navLink.contact = false;
      }
      break;
      case 4: {
        this.navLink.home = false;
        this.navLink.project = false;
        this.navLink.about = false;
        this.navLink.contact = true;
      }
    }

  }
}
