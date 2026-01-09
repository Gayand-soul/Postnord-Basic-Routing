import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { HomeComponent } from './components/home-component/home-component';
import { Page1Component } from './components/page1-component/page1-component';
import { Page2Component } from './components/page2-component/page2-component';
import { PagenotfoundComponent } from './components/pagenotfound-component/pagenotfound-component';
import { Page3Component } from './components/page3-component/page3-component';

export const routes: Routes = [
    { path: '',
      component: HomeComponent,
      title: 'Home'
    },
    {
      path: 'page1', // skriv samma sätt som navbarhtml=> routerLink="/page1"
      component: Page1Component,
      title: 'Page1'
    },
    {
      path: 'page2',
      component: Page2Component,
      title: 'Page2'
    },
    {
      path: 'page3',
      component: Page3Component,
      title: 'Page3'
    },
    {
      path: '**',
      component: PagenotfoundComponent,
      title: 'PageNotFound'
    }
];
   
