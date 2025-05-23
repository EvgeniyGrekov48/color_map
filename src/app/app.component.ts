import { Component } from '@angular/core';
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-main-layout></app-main-layout>',
  imports: [MainLayoutComponent]
})
export class AppComponent {

}
