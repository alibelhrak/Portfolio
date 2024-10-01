import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './dark-mode.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkMode: boolean = false;
  darkMode=false ;
  constructor(private darkModeService: DarkModeService) {}
  
  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.isDarkMode = mode;
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    
  }
  detectColorScheme(){
    if(window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches){
      this.darkMode = true;
      document.documentElement.setAttribute("data-theme",this.darkMode ? 'dark' : 'light');
    }
  }
  toggleTheme(){
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute("data-theme",this.darkMode ? 'dark' : 'light');
  }
}