import { Component, signal } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App {
  protected readonly title = signal('routingBasic');
}
