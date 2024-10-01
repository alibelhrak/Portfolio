import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  constructor() {
    this.detectColorScheme();
  }

  detectColorScheme() {
    if (window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches) {
      this.darkMode = true;
    }
    this.updateTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.updateTheme();
  }

  private updateTheme() {
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }

  isDarkMode() {
    return this.darkMode;
  }
}
