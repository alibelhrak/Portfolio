import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  
  constructor(private themeService : ThemeService){
  }

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }

  isDarkModeEnabled() {
    return this.themeService.isDarkMode();
  }
  
  
}
